# PiPiGui On PC

## 起因

在帮小姐姐装 Windows 的时候，小姐姐说了这个网站 https://m.pipigui.cc/
说可以在线看各种剧的一个网站，但是只支持手机浏览器浏览

## 经过

于是第二天看了一下源码，发现是前端两个地方做了判断，判断 `navigator.userAgent` 和 `navigator.platform ` 如果不合法就会直接发生跳转走了

于是写了这个插件，将 `navigator.userAgent` 和 `navigator.platform` 改成和我的 MIX2 一致,  代码抄了：[Changing navigator.userAgent using Chrome Extension](https://stackoverflow.com/questions/23202136/changing-navigator-useragent-using-chrome-extension)

还加一个 background.js  使得点击插件的图标可以直接跳到 pipigui 的网站

## 结果

小姐姐说要好好学习了，连微信都不回的那种（就是不和我玩了），所以这个东西也就只有我自己一个人用了，所以就放在这里吧

## 后记

**使用方法**  
1. 下载解压
2. 打开 chrome 扩展页面（或者直接访问 `chrome://extensions/`）
3. 点开右边的开发者按钮
4. 加载已解压的扩展程序，选择 PiPiGuiOnPc 这个文件夹就好了

**其他**
只修改了` *://*.pipigui.cc/*` 下的 UA ，所以访问其他网站 `navigator.userAgent` 和 `navigator.platform `的值仍然是系统的，不用担心

**修改**

如果其他网站也有这种套路：**前端验证指定 UA 或者 JS 某些属性的**，也可以用类似的思路搞定，具体参考上面的 Stack Overflow 的链接啦加油



Chrome 70.0.3538.77（正式版本）（64 位）
2018.11.10