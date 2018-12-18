title: cordova基础简介
speaker: 郗兴龙
url: 
transition: slide3
files: /css/style.css
[slide style="color:hotpink"]
# 分享内容
----
* Cordova基础简介  {:&.rollIn}
* Cordova环境配置
* Cordova第一个应用程序
* Cordova config.xml文件
* Cordova实际应用

[slide style=""]

# 1.Cordova基础简介
----
* [Cordova官网](http://cordova.apache.org/) {:&.rollIn}
* [Cordova中文网](http://cordova.axuer.com/)

[slide style="color:#F4BB02"]

# 1.1cordova历史
----
* Cordova是PhoneGap贡献给Apache后的开源项目，是从 PhoneGap中抽离出的核心代码，是驱动PhoneGap的核心引擎。有点类似Webkit和Google Chrome的关系。 {:&.rollIn}
* 渊源就是：早在2011年10月，Adobe收购了Nitobi Software和它的PhoneGap产品，然后宣布这个移动Web开发框架将会继续开源，并把它提交到Apache Incubator，以便完全接受ASF的管治。当然，由于Adobe拥有了PhoneGap商标，所以开源组织的这个PhoneGap v2.0版产品就更名为Apache Cordova。

[slide style=""]
# 1.2cordova功能
----
* Apache Cordova是一个开源的移动开发框架，它支持使用标准的Web开发技术（HTML5、CSS3和JavaScript）开发跨平台的移动端应用。如果需要访问各平台本地化的功能，如摄像头、网络、传感器……，可以通过使用插件(plugin)来完成。
* [Native、webaApp、Hybrid简介](https://segmentfault.com/a/1190000011154120)
[slide style=""]
# Native App
* 传统的原生App开发模式，有iOS和aOS两大系统，需要各自语言开发各自App。 {:&.rollIn}
* 优点：性能和体验都是最好的。 
* 缺点：开发和发布成本高
* 应用技术：Swift，OC，Java
[slide style=""]
# WebApp
----
* 移动端的网站，常被称为H5应用，说白了就是特定运行在移动端浏览器上的网站应用。一般泛指 SPA(Single Page Application)模式开发出的网站，与MPA（Multi-page Application）对应。 {:&.rollIn}
* 优点：开发和发布成本最低
* 缺点：性能和体验不能讲是最差的，但也受到浏览器处理能力的限制，多次下载同样会占用用户一定的流量
* 应用技术：ReactJS，RegularJS，VueJS等等

[slide style=""]
# Hybrid App
----
* 混合模式移动应用，介于Web App、Native App这两者之间的App开发技术，兼具“Native App良好交互体验的优势”和“Web App跨平台开发的优势”（百度百科解释） {:&.rollIn}
* 主要的原理是，由Native通过JSBridge等方法提供统一的API，然后用Html+Css实现界面，JS来写逻辑，调用API，最终的页面在Webview中显示，这种模式下，Android、iOS的API一般有一致性，Hybrid App所以有跨平台效果。
* 优点：开发和发布都比较方便，效率介于Native App、Web App之间
* 缺点：学习范围较广，需要原生配合
* 应用技术：PhoneGap，AppCan，Wex5，APICloud等
[slide style=""]
# 1.3.cordova架构
----
* [cordova架构图](http://cordova.apache.org/static/img/guide/cordovaapparchitecture.png) {:&.rollIn}
* WebView--Cordova启用的WebView可以给应用提供完整用户访问界面。在一些平台中，他也可以作为一个组件给大的、混合应用，这些应用混合和Webview和原生的应用组件。(查看Embedding WebViews获得详细内容。)
* Web App -- 这是你应用程序代码存在的地方。应用的实现是通过web页面，默认的本地文件名称是是index.html，这个本地文件应用CSS,JavaScript,图片，媒体文件和其他运行需要的资源。应用执行在原生应用包装的WebView中，这个原生应用是你分发到app stores中的。这个容器中包含一个非常重要文件- config.xml 文件他提供App的重要的信息和特定的参数用来影响App的工作，比如说是否响应方向的变动。
[slide style=""]
* Plugin -- 插件是Cordova生态系统的重要组成部分。他提供了Cordova和原生组件相互通信的接口并绑定到了标准的设备API上。这使你能够通过JavaScript调用原生代码。Apache Cordova项目维护着一组插件叫做核心插件。这些核心插件可以让你的应用程序访问设备功能，比如：电源，相机，联系人等。
[slide style=""]
# 2.Cordova环境配置
* 安装Nodejs和npm {:&.rollIn}
* 安装cordova -- npm install -g cordova
* 安装Android SDK 和 安装Java 开发工具包（Jdk) [android SDK安装以及环境变量配置](https://blog.csdn.net/zeternityyt/article/details/79655150) [JDK安装与环境变量配置](https://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html)--- Android 平台
* 安装iOS XCode --- iOS 平台
[slide style="color:#82007F"]
# 配置sdk环境
* 环境变量的设置 ：计算机-->属性-->高级系统设置-->高级-->环境变量
* 1.系统变量-->新建 SDK_HOME 变量。变量值填写sdk的安装目录（本人的是：D:\sdk）
* 2.系统变量-->寻找Path变量-->编辑。在变量值最后输入 %SDK_HOME%\tools;%SDK_HOME%\j\platform-tools;（注意原来Path的变量值末尾有没有;号，如果没有，先输入；号再输入上面的代码）
* 3.检验是否配置成功 运行cmd 输入 android -h 。若如图所示 显示版本信息 则说明安装和配置成功。


````
C:\Users\ChuangLan>android -h

       Usage:
       android [global options] action [action options]
       Global options:
  -s --silent     : Silent mode, shows errors only.
  -v --verbose    : Verbose mode, shows errors, warnings and all messages.
     --clear-cache: Clear the SDK Manager repository manifest cache.
  -h --help       : Help on a specific command.

                                                                    Valid
                                                                    actions
                                                                    are
                                                                    composed
                                                                    of a verb
                                                                    and an
                                                                    optional
                                                                    direct
                                                                    object:
-    sdk              : Displays the SDK Manager window.
-    avd              : Displays the AVD Manager window.
-   list              : Lists existing targets or virtual devices.
-   list avd          : Lists existing Android Virtual Devices.
-   list target       : Lists existing targets.
-   list device       : Lists existing devices.
-   list sdk          : Lists remote SDK repository.
- create avd          : Creates a new Android Virtual Device.
-   move avd          : Moves or renames an Android Virtual Device.
- delete avd          : Deletes an Android Virtual Device.
- update avd          : Updates an Android Virtual Device to match the folders
                        of a new SDK.
- create project      : Creates a new Android project.
- update project      : Updates an Android project (must already have an
                        AndroidManifest.xml).
- create test-project : Creates a new Android project for a test package.
- update test-project : Updates the Android project for a test package (must
                        already have an AndroidManifest.xml).
- create lib-project  : Creates a new Android library project.
- update lib-project  : Updates an Android library project (must already have
                        an AndroidManifest.xml).
- create uitest-project: Creates a new UI test project.
- update adb          : Updates adb to support the USB devices declared in the
                        SDK add-ons.
- update sdk          : Updates the SDK by suggesting new platforms to install
                        if available.
````
[slide style="color:yellow"]
# 配置jdk环境
* 环境变量的设置 ：计算机-->属性-->高级系统设置-->高级-->环境变量
* 1.系统变量-->新建 JAVA_HOME 变量。变量值填写jdk的安装目录（本人的是C:Program Files\Java\jdk1.8.0_101）
* 2.系统变量-->寻找Path变量-->编辑。在变量值最后输入 %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;（注意原来Path的变量值末尾有没有;号，如果没有，先输入；号再输入上面的代码）
* 3.系统变量-->新建CLASSPATH变量。变量值填写：  .;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar（注意最前面有一点）
* 4.检验是否配置成功 运行cmd 输入 java -version。若如图所示 显示版本信息 则说明安装和配置成功。

````
C:\Users\ChuangLan>java -version
java version "1.8.0_111"
Java(TM) SE Runtime Environment (build 1.8.0_111-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.111-b14, mixed mode)

````
[slide style=""]
<img src="/img/sdk.png">

[slide style=""]
# 3.Cordova第一个应用程序
* 安装Cordova CLI [cordova常用命令](https://blog.csdn.net/zp511253886/article/details/49817637) {:&.rollIn}
* 创建App
* 添加平台
* 安装构建先决条件
* 构建App
* 测试App
* 添加插件
[slide style=""]
* 创建app -- cordova create hello com.example.hello HelloWorld {:&.rollIn}
* hello -- 指定目录名称, com.example.hello -- 包名, HelloWorld -- 应用名(app名称)
* 给你的App添加目标平台。我们将会添加'ios'和'android'平台，并确保他们保存在了config.xml中:
* 添加iOS平台 --  cordova platform add ios --save 和  cordova platform add android --save  
* 添加Android平台 -- cordova platform add android --save
* 检查你当前平台设置状况  cordova platform ls
[slide style=""]
# 项目目录介绍
````
myapp/
 |-- config.xml
 |-- hooks/
 |-- merges/
 | | |-- android/
 | | |-- windows/
 | | |-- ios/
 |-- www/
 |-- platforms/
 | |-- android/
 | |-- windows/
 | |-- ios/
 |-- plugins/
   |--cordova-plugin-camera/
 * hooks - 存放自定义cordova命令的脚本文件。每个project命令都可以定义before和after的Hook，比如：before_build、after_build。  {:&.rollIn} 
 * merges - 存放各个平台特殊的文件，会和www进行合并编译，相同的文件merges下的文件优先。 
 * platforms - 各个平台的原生代码工程，不要手动修改，因为在build的时候会被覆盖。 
 * plugins - 插件目录（cordova提供的原生API也是以插件的形式提供的） 
 * www - 源代码目录，在cordova prepare的时候会被copy到各个平台工程的assets\www目录中。  
         其中index.html为应用的入口文件。 
 * config.xml：配置文件
````
[slide style=""]
# 4.config.xml文件

* [config.xml介绍博客](https://blog.csdn.net/jiangbo_phd/article/details/52604402) {:&.rollIn}
* [config.xml介绍简书](https://www.jianshu.com/p/755637f2fefc)
* [config.xml介绍简书2](https://www.jianshu.com/p/eee30e22064a)
* [config.xml介绍w3cschool](https://www.w3cschool.cn/cordova/cordova_config_xml.html)

[slide style=""]
````
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.example.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>HelloWorld</name>
    <description>
        A sample Apache Cordova application that responds to the deviceready event.
    </description>
    <author email="dev@cordova.apache.org" href="http://cordova.io">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <plugin name="cordova-plugin-whitelist" spec="1" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
    <platform name="android">
        <allow-intent href="market:*" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
</widget>
````
[slide style=""]
# 5.Cordova实际应用
* [cordova环境搭建，搭建项目，以及拍照功能的实现](https://www.cnblogs.com/zlj123/p/6004891.html)
* [cordova 自定义图标和启动页](https://www.jianshu.com/p/3ad9538cf5fe)
* [学习资源整理](https://www.jianshu.com/p/2640d15a59d7)
[slide style=""]
#项目代码
````
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.example.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>HelloWorld</name>
    <description>
        A sample Apache Cordova application that responds to the deviceready event.
    </description>
    <author email="dev@cordova.apache.org" href="http://cordova.io">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <plugin name="cordova-plugin-whitelist" spec="1" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
    <platform name="android">
        <!--app 图标-->
        <icon density="ldpi" src="res/icon/android/icon-36-ldpi.png" />
        <icon density="mdpi" src="res/icon/android/icon-48-mdpi.png" />
        <icon density="hdpi" src="res/icon/android/icon-72-hdpi.png" />
        <icon density="xhdpi" src="res/icon/android/icon-96-xhdpi.png" />
        <allow-intent href="market:*" />
        <!--启动页-->
        <splash density="land-hdpi" src="res/screen/android/screen-hdpi-landscape.png" />
        <splash density="land-ldpi" src="res/screen/android/screen-ldpi-landscape.png" />
        <splash density="land-mdpi" src="res/screen/android/screen-mdpi-landscape.png" />
        <splash density="land-xhdpi" src="res/screen/android/screen-xhdpi-landscape.png" />
        <splash density="port-hdpi" src="res/screen/android/screen-hdpi-portrait.png" />
        <splash density="port-ldpi" src="res/screen/android/screen-ldpi-portrait.png" />
        <splash density="port-mdpi" src="res/screen/android/screen-mdpi-portrait.png" />
        <splash density="port-xhdpi" src="res/screen/android/screen-xhdpi-portrait.png" />
        <preference name="SplashScreen" value="screen" />
        <preference name="SplashScreenDelay" value="5000" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
    <plugin name="cordova-plugin-camera" spec="^4.0.3" />
    <plugin name="cordova-plugin-file" spec="^6.0.1" />
    <plugin name="cordova-plugin-file-transfer" spec="^1.7.1" />
    <plugin name="cordova-plugin-battery-status" spec="^2.0.2" />
    <plugin name="cordova-plugin-splashscreen" spec="^5.0.2" />
    <engine name="android" spec="^7.0.0" />
````
[slide style=""]
# 谢谢观看
