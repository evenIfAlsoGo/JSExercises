原生 JavaScript 练习网站

在线浏览地址：https://evgo2017.github.io/JSExercises/

# 使用方式

​	右键-> 查看网页源代码-> 点击 \<script src="../js/jsxxx.js">\</script> 标签中的 ” ./js/jsxxx.js“ - >  查看对应模块的 JS 代码。

# 注意事项

1. 每一子页面，均有对应的 JS 文件，及相应的解析。学习重点在于对应的 js 文件。

# 更新时间

| 主要更新内容                                             | 更新时间   |
| -------------------------------------------------------- | ---------- |
| 将首页列表由 JSON 改为数组                               | 2018.08.15 |
| 将首页列表的数据从 HTML 中分离，配置 JSON 文件，解决跨域 | 2018.08.05 |
| 《JQuery》                                               | 2018.02.19 |
| 《轮播图》                                               | 2018.02.18 |
| 《选项卡》                                               | 2018.02.17 |
| 《DOM 操作 1》&& 《DOM 操作 2》》                        | 2018.02.16 |
| 《窗口》                                                 | 2017.11.09 |
| 《消息框》                                               | 2017.11.08 |
| 设计各模块样式                                           | 2017.10.04 |


# 文件结构

//之后更新

JSExercises

​	├─ index.html 首页

​	├─ favicon.ico 网站图标

​	├─ README.md 此篇文档

​	├─ pages 各个子网页的 html 文件

​	├─ images 所有图片

​	├─ js 各个子网页的 js 文件

​	│		 ├─ js001.js 第二个页面

​	│		 ├─ js002.js 第二个页面

​	│		 ├─ ....

​	│	 	└─ jsxxx.js 第 x 个页面

​	└─ css 

​		├─ main.css 导入其余三个 css 文件，所有网页只需引用这一个 css 文件

​		├─ base.css 基础样式

​		├─ module.css 模块的样式（除排版）

​		└─ layout.css 模块的排版样式

# 主要模块

//之后更新

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

​	└─  footer	尾部 

​			└─copyrigh	版权信息

pages.html	子页面

​	├─ header 	头部 标题

​	├─ content	主内容 第一个习题

​	│		└─ jsshow	会被 DOM 操作

​	├─ ....

​	└─ content

​			└─ jsshow
