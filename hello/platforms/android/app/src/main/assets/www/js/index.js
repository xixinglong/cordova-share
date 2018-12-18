/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//方式一
/*var app = {
    // Application Constructor
    initialize: function() {
        alert('deviceready加载完成' + this);
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // this.receivedEvent('deviceready');
        alert('onDeviceReady' + this);
        app.receivedEvent('btn');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /!*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*!/
        alert('receivedEvent' + this);
        var parentElement = document.getElementById(id);
        parentElement.addEventListener("click", app.cameraTakePicture);
        console.log('Received Event: ' + id);
    },
    cameraTakePicture:function () {
        alert('cameraTakePicture' + this);
        navigator.camera.getPicture(app.onSuccess, app.onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    },
    onSuccess:function (imageData) {
        alert('onSuccess' + this);
        var image = document.getElementById('smallImage');
        image.style.display = 'block';
        image.src = "data:image/jpeg;base64," + imageData;
    },
    onFail:function (message) {
        alert('Failed because: ' + message);
    }
};
app.initialize();*/
//方式二
/*
var destinationType;
var app={
    //初始化
    initialize:function () {
        document.addEventListener('deviceready',app.onDeviceReady,false)
    },
    onDeviceReady:function () {
        destinationType = navigator.camera.DestinationType;
    },
    //拍照
    captruePhoto:function () {
        navigator.camera.getPicture(app.onPhotoDataSuccess,app.onFail,{
            quality:50,
            destinationType:destinationType.DATA_URL
        })
    },
    //拍照成功回调
    onPhotoDataSuccess:function (imageData) {
        console.log(imageData)
        var smallImage = document.getElementById('smallImage');
        smallImage.style.display = 'block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
    },
    //拍照失败回调
    onFail:function (message) {
        alert('拍照失败' + message)
    }
};
app.initialize();
var btn = document.getElementById('btn');
console.log(btn);
btn.onclick = function () {
    app.captruePhoto();
};
*/
// 拍照 本地图片 拍照上传
var app = {
    // Application Constructor
    initialize: function() {
        // alert('deviceready加载完成' + this);
        document.addEventListener('deviceready', app.onDeviceReady, false);
        document.addEventListener('backbutton', app.onBackKeyDown, false);
    },
    onDeviceReady: function() {
        // alert('onDeviceReady' + this);
        app.loadSlide();
        app.receivedEvent('btn');
        app.receivedEventLocal('btnLocal');
        // app.receivedEventUpload('btnUpload');
        /*电池状态插件引用*/
        // window.addEventListener("batterystatus", app.onBatteryStatus, false);
        /*联系人插件引用*/
        document.getElementById("createContact").addEventListener("click", app.createContact);
        document.getElementById("findContact").addEventListener("click", app.findContacts);
        document.getElementById("deleteContact").addEventListener("click", app.deleteContact);
    },
    /*引导页*/
    loadSlide:function () {
        var HomeLogo = localStorage.getItem("HomeLogo");
        if(HomeLogo == null){
            location.href = "logo.html"
        }
    },
    /*清除本地存储*/
    onBackKeyDown:function () {
        localStorage.removeItem('HomeLogo')
    },
    //电池状态回调函数
    onBatteryStatus:function (info) {
        alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
    },
    //点击拍照事件
    receivedEvent: function(id) {
        // alert('receivedEvent' + this);
        var parentElement = document.getElementById(id);
        parentElement.addEventListener("click", app.cameraTakePicture);
        console.log('Received Event: ' + id);
    },
    //点击获取本地图片事件
    receivedEventLocal: function(id) {
        // alert('receivedEvent' + this);
        var parentElement = document.getElementById(id);
        parentElement.addEventListener("click", app.loadImageLocal);
        console.log('Received Event: ' + id);
    },
    //拍照上传点击事件
   /* receivedEventUpload: function(id) {
        alert('receivedEvent' + this);
        var parentElement = document.getElementById(id);
        parentElement.addEventListener("click", app.loadImageUpload);
        console.log('Received Event: ' + id);
    },*/
    //拍照函数
    cameraTakePicture:function () {
        // alert('cameraTakePicture' + this);
        navigator.camera.getPicture(app.onSuccess, app.onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    },
    //获取本地照片函数
    loadImageLocal:function () {
        //获取本地图片并显示在屏幕
        navigator.camera.getPicture(app.onLoadImageLocalSuccess, app.onFail, {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });
    },
    //拍照上传--拍照
    /*loadImageUpload:function () {
        //拍照上传并显示在屏幕
        navigator.camera.getPicture(app.onLoadImageUploadSuccess, app.onLoadImageFail, {
            destinationType: Camera.DestinationType.DATA_URL
        });
    },*/
    //拍照成功回调
    onSuccess:function (imageData) {
        // alert('onSuccess' + this);
        var image = document.getElementById('smallImage');
        image.style.display = 'block';
        image.src = "data:image/jpeg;base64," + imageData;
    },
    //获取本地照片成功回调
    onLoadImageLocalSuccess:function (imageURL) {
        // alert('onLoadImageLocalSuccess' + this);
        var image = document.getElementById('smallImageLocal');
        image.style.display = 'block';
        image.src = imageURL;
    },
    //拍照上传--上传
    /*onLoadImageUploadSuccess:function (imageURL) {
        //此处执行文件上传的操作，上传成功后执行下面代码
        var options = new FileUploadOptions(); //文件参数选项
        options.fileKey = "file";//向服务端传递的file参数的parameter name
        options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);//文件名
        options.mimeType = "image/jpeg";//文件格式，默认为image/jpeg
        var ft = new FileTransfer();//文件上传类
        ft.onprogress = function (progressEvt) {//显示上传进度条
            if (progressEvt.lengthComputable) {
                navigator.notification.progressValue(Math.round(( progressEvt.loaded / progressEvt.total ) * 100));
            }
        }
        navigator.notification.progressStart("提醒", "当前上传进度");
        ft.upload(imageURI, encodeURI('http://192.168.0.32:8888/app/upload.jfinal'), function () {
            navigator.notification.progressStop();//停止进度条
            var image = document.getElementById('smallImageUpload');
            image.style.display = 'block';
            image.src = imageURL;
            navigator.notification.alert("文件上传成功！", null, "提醒");
        }, null, options);
    },*/
    //拍照或获取照片失败回调提示
    onFail:function (message) {
        alert('Failed because: ' + message);
    },
    /*创建联系人回调*/
    createContact:function () {
        var myContact = navigator.contacts.create({"displayName": "Test User"});
        myContact.save(contactSuccess, contactError); //保存联系人

        function contactSuccess() {
            alert("Contact is saved!")
        }

        function contactError(message) {
            alert('Failed because: ' + message);
        }
    },
    /*查找联系人回调*/
    findContacts:function () {
        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;

        fields = ["displayName"];
        navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

        function contactfindSuccess(contacts) {
            alert(JSON.stringify(contacts));
            for (var i = 0; i < contacts.length; i++) {
                alert("联系人： " + contacts[i].displayName + '\n联系电话：' + contacts[i].phoneNumbers[0].value);
            }
        }

        function contactfindError(message) {
            alert('Failed because: ' + message);
        }
    },
    /*删除联系人回调*/
    deleteContact:function () {
        var options = new ContactFindOptions();
        options.filter = "Test User";
        options.multiple = false;
        fields = ["displayName"];

        navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

        function contactfindSuccess(contacts) {

            var contact = contacts[0];
            contact.remove(contactRemoveSuccess, contactRemoveError);

            function contactRemoveSuccess(contact) {
                alert("Contact Deleted");
            }

            function contactRemoveError(message) {
                alert('Failed because: ' + message);
            }
        }

        function contactfindError(message) {
            alert('Failed because: ' + message);
        }
    }
};
app.initialize();
