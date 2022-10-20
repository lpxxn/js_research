1、background-color
background-color 用来设置元素的背景颜色

背景颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）

默认值为：transparent，无继承性

示例：

h1 {
background-color: pink;
}
2、background
background 可以设置所有的背景属性

常见属性如下：

background-color 规定要使用的背景颜色
background-position 规定背景图像的位置
background-size 规定背景图片的尺寸
background-repeat 规定如何重复背景图像
background-image 规定要使用的背景图像
示例：

body {
background: #00FF00 url(bgimage.gif) no-repeat fixed top;
}
给 body 设置背景颜色为 #00FF00，背景图像为 bgimage.gif，不平铺

且背景图像不随页面滚动，图像的位置在中上方，因为如果只设置 top，center 将为第二个参数
