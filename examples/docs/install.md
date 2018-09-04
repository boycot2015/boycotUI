### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```bash
npm i boycot-ui -S
```
### CDN

目前可以通过 unpkg.com/boycot-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```javascript
<link rel="stylesheet" href="https://unpkg.com/boycot-ui/lib/theme-default/index.css">
<script src="https://unpkg.com/boycot-ui/lib/index.js"></script>
```
我们建议使用 CDN 引入 Boycot 的用户在链接地址上锁定版本，以免将来 Boycot 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。

### Hello world

通过 CDN 的方式我们可以很容易地使用 boycot 写出一个 Hello world 页面。在线演示


如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<a href="#/start">快速上手</a>。