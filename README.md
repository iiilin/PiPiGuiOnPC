# PiPiGui On PC

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
