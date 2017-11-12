原生 JavaScript 练习网站

在线浏览地址：https://evenifalsogo.github.io/JSExercises/

# 使用方式

​	右键-> 查看网页源代码-> 点击 \<script src="../js/jsxxx.js">\</script> 标签中的 ” ./js/jsxxx.js“ - >  查看对应模块的 JS 代码。

# 注意事项

1. 每一子页面，均有对应的 JS 文件。
2. 除 JS 练习模块内使用 JS 外，网站其余地方均未使用。避免使用者混乱。



# 文件结构

JSExercises

​	├─ index.html 首页

​	├─ favicon.ico 网站图标

​	├─ README.md 此篇文档

​	├─ pages 各个子网页的 html 文件

​	├─ images 所有图片

​	├─ js 各个子网页的 js 文件

 	│	  ├─ js001.js 第一个页面

​	│		 ├─ js002.js 第二个页面

​	│		 ├─ ....

​	│	 	└─ jsxxx.js 第 x 个页面

​	└─ css 

​		├─ main.css 导入其余三个 css 文件，所有网页只需引用这一个 css 文件

​		├─ base.css 基础样式

​		├─ module.css 模块的样式（除排版）

​		└─ layout.css 模块的排版样式

# 主要模块

index.html 首页

​	├─   header	  头部 标题

​	├─   main	主要内容

​	│	└─ list	列表

​	│		├─ ul	

​	│			├─ li  第一部分

​	│			│	└─ ol  子列表

​	│			│     ....

​	│			└─ li 第...部分

​	│				└─ ol  子列表

​	├─  sideBar	侧边栏

​	│		├─ banner	关注我

​	│		├─ guide	帮助指南

​	│		└─ friendLink	友情链接

​	└─  footer	尾部 

​			└─copyrigh	版权信息

pages.html	子页面

​	├─ header 	头部 标题

​	├─ content	主内容 第一个习题

​	│		└─ jsshow	会被 DOM 操作

​	├─ ....

​	└─ content

​			└─ jsshow
