> 16年，看到一个学弟介绍了他自己的blog，是由hexo+next+github搭建的，觉得挺有趣的，所以自己也做了一个。但是觉得每次都要打开git shell去执行generate、deploy等操作十分麻烦，而且看着整个工程目录都是hexo封装好的包，不知道它里面都做了什么，十分难受。
>
> 之后接触了ghost，觉得ghost的很多主题很nice，它提供一个后台的管理界面，所有想要发布的东西都要登录这个后台管理界面去编辑去发布。这种托管ghost跳了好几层的体验很别扭，更无奈的是ghost只支持node`0.10.*`版本，这让我不得不又研究了一下[nvm](https://github.com/coreybutler/nvm-windows)。
>
> 17年偶然在网上看到了一个网友[Monine](https://monine.github.io/#/)的神奇操作，惊呆了。 决定试试这个。
>
> 用到以上这些内容的归根结底的原因还是个人维护一个云服务器+一个自己喜欢的域名有点小心疼。

## 环境

Node.js 8.10.0

npm 5.6.0

## 服务器

[GitHub Pages](https://pages.github.com/)

## SPA

由vue-router、vuex及构建工具vue-cli、webpack、less等打造。

## 原理

比如我的github的username是MichelMa666，那我的文章就以markdown格式写在MichaelMa666.github.io这个库的issues下面，然后通过github提供的[issues api](https://developer.github.com/v3/issues/)去请求文章内容通过[marked.js](https://www.npmjs.com/package/marked)再渲染到页面上。其中有几个重要的问题需要关注：[Monine也写得很清楚](https://github.com/Monine/monine.github.io/blob/master/README.md )

## 注意

我刚开始使用Monine提供的拼personal access token的方法时，总是不起作用，token依然失效。后来发现npm run build的时候。webpack会将你拼接的字符串重新组合在一起。所以，build结束后要去压缩好的文件里去搜你的token，重新改成字符拼接的格式。因为请求issues的类型都是get，Monine的做法是在url后接参数的形式。这种方式换成域名访问的形式就总会失效。后来找到个方式[OAuth2 token (sent in a header)](https://developer.github.com/v3/#authentication)，通过axio在报文头里增加键值，在报文头中添加`'Authorization': 'yourAccessToken'`这串秘钥可以存到vuex中，实际上我也是这么做的，同样记得用字符串拼接的形式。
