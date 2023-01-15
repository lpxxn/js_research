## 一、HTML基础标签

### 1.HTML简介

超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的<span style="color:red">标准标记语言</span>

标记语言是一套**标记标签**

HTML 使用标记标签来**描述**网页

HTML 文档包含了HTML **标签**及**文本**内容

HTML 运行在浏览器上，由浏览器来解析

HTML文档也叫做 **web 页面**

文档的后缀名：xxx.html 或 xxx.htm

### 2.HTML标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)

- HTML 标签是由*尖括号*包围的关键词，比如 `<html>`
- HTML 标签通常是*成对出现*的，比如 `<b>` 和` </b>`
- 标签对中的第一个标签是**开始标签**，第二个标签是**结束标签**
- 开始和结束标签也被称为**开放标签**和**闭合标签**

### 3.HTML基础标签

#### html

html是网页的根标签，网页的所有内容，都必须要写在该标签里面

#### head

head是头部标签，用于导入外部的资源信息和描述网页自身信息

#### title

title是网页自身的标题标签，它里面的内容会在网页的浏览器的选项卡上显示

#### body

body是主体标签，网页中能看到到所有内容，都必须要写在该标签里面

#### `<!DOCTYPE html>`

文档声明，是告诉浏览器采用什么标准去解析下面的网页，这里表示html5的标准

如果没有文档声明标签，浏览器会根据网页中具体的标签去判断使用什么标准

其他标准：

HTML 4.01

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

XHTML 1.0

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

#### meta

meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务

meta标签是单标签，不需要闭合标签，规范写法，单标签需要自闭合

声明编码：

utf-8 包含全世界所有国家需要用到的字符

gb2312 包含全部中文字符

```html
<meta charset='utf-8' />
```

页面关键词：

```html
<meta name="keywords" content="前端,web前端" />
```

页面描述：

```html
<meta name="description" content="学前端，就找兵哥...." />
```

页面重定向和刷新：

content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页

```html
<meta http-equiv="refresh" content="30;url=" />
```

移动设备：

如果不是响应式网站，不要使用initial-scale或者禁用缩放

大部分4.7-5寸设备的viewport宽设为360px；5.5寸设备设为400px；iphone6设为375px；ipone6 plus设为414px

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
<!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->
```

1. width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）
2. height：高度（数值 / device-height）（范围从223 到10,000）
3. initial-scale：初始的缩放比例 （范围从>0 到10）
4. minimum-scale：允许用户缩放到的最小比例
5. maximum-scale：允许用户缩放到的最大比例
6. user-scalable：用户是否可以手动缩 (no,yes)

注意，很多人使用initial-scale=1到非响应式网站上，这会让网站以100%宽度渲染，用户需要手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或maximum-scale=1，则用户将不能放大/缩小网页来看到全部的内容

#### `<link/>`

导入外部资源，比如：网页选项卡图标，外部样式

```html
<link rel="icon" href="favicon.ico">
```

#### h1~h6

h1~h6是网页的内容标题标签，h1最大，h6最小。标题标签的特点是：字体会加粗

#### p

p标签是段落标签，用于描述一段内容

#### hr

hr是水平线标签，用于对网页中的内容进行分隔

#### br

在网页中，无论打多少空格，或者换多少次行，默认都只是一个空格

如果需要手动换行，需要使用br标签

#### strong

strong是加粗标签，用于突出一段内容里面的部分信息

#### em

em是倾斜标签，也用于突出一段内容里面的部分信息

#### 特殊符号

```html
&nbsp; 空格
&lt; 小于号
&gt; 大于号
&quot; 双引号
&copy; 版权符号
```

#### img

img是图片标签，src属性设置图片的地址，地址可以是本地地址，也可以是网络地址

title属性设置鼠标悬停提示信息，alt属性设置图片的替代文字，当图片无法显示时，显示对应的文字

width属性设置图片宽度，height属性设置图片高度，如果只设置了其中一个属性，另一个属性会等比缩放

#### a

超链接标签，根据链接类型可以分为：页面间链接，锚链接，功能性链接

1.页面间链接：

href属性设置链接的地址，可以是本地地址，也可以是网络地址

target属性设置目标窗口打开的位置，属性值`_self`替换自身窗口，`_blank`是打开新窗口

```html
<a href="./index06.html" target="_self">替换自己</a>
<a href="./index06.html" target="_blank">打开新窗口</a>
```

2.锚链接：

用于当前页面的跳转，从页面的某个区域，跳转到另一个区域

通常需要两个a标签，一个a标签通过name属性设置锚标记，另一个a标签通过href属性跳转到对应的锚标记处

注意：href属性值需要加一个#号

如果需要跨页面，在href属性中，显示设置地址，在地址的后面在设置对应的锚标记

```html
<a href="#bj">北京</a>
<!-- 这里的a标签，只是做一个锚标记，通过name属性设置标记名 -->
<a name="bj"></a>
```

3.功能性链接：

利用超链接打开本地的应用

```html
<a href="mailto:123456789@qq.com">发送邮件</a>
<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes">打开QQ</a>
```

#### div

div是分区标签，是一个块级标签，通常用于网页的布局

#### span

span是范围标签，是一个行级标签，通常用于突出显示段落中的部分内容

### 4.标签分类

所有的标签可以分为两类：块级标签和行级标签(内联标签)

块级标签：该元素独占一行(h2,p)

行级标签：按行显示，一行不够放，才会自动换行(a,strong,em,img)

注意：通常情况下，行级标签要放在块级标签里面使用

注意：p标签不能嵌套p标签



## 二、列表、表格、表单

### 1.有序列表和无序列表

ol是有序列表标签，它里面的列表项是有序号的

ul是无需列表标签，它里面的列表项是没有序列的，但是有符号

li 是列表项标签

列表可以嵌套定义

通过设置ol的type属性值，可以改变序号类型，可以设置属性值有：A，a，I，i，1

ul标签通过type属性，也可以设置符号类型：属性值有：disc，circle，square

### 2.定义列表标签

dl是定义列表标签

dt的定义列表的标题标签

dd是定义列表的描述标签，用来描述dt

可以用多个dd去描述一个dt

一个dl可以只描述一个dt，也可以描述多个dt

一般图文布局的结构会使用定义列表标签

### 3.表格标签

table是表格标签，通过border属性设置表格的边框，width属性设置宽度，height属性设置高度

设置表格的属性align="center"，将整个表格居中

tr是行标签

设置tr的align属性，控制的是tr里面的所有td的水平对齐方式

td是列标签

td设置align属性，只是对当前td设置水平对齐方式

colspan属性，用于单元格跨列

rowspan属性，用于单元格跨行

如果表格里面的单元格需要跨列或者跨行：

1. 先将完整的表格画好
2. 然后做跨列
3. 最后做跨行

### 4.表格的完整结构

表格根据结构划分：thead是表格的头部，tbody是表格的主体，tfoot是表格的尾部

caption是表格的标题标签

td是普通列，th是表头列，th里面的内容默认会加粗并且居中

### 5.表单标签

form是表单标签，表单的作用是：接收用户输入的数据，并向服务器发送

method属性设置表单的提交方式：GET和POSTP (POST比GET更安全)

action属性设置表单的提交地址，比如：`http://192.168.112.55:8080/address/add`

### 6.表单里面的常用元素

form是表单标签，所有的表单元素，必须要放到form标签里面，才能提交到服务器

如果表单中使用了文件域，表单标签需要添加一个enctype="multipart/form-data"属性

input标签是表单的元素，绝大多数表单元素都是使用input标签，通过type属性设置元素的类型

1. type="text"是文本框，size属性设置初始长度，maxlength属性设最大输入长度，name属性设置表单元素的名称

2. type="password"是密码框

3. type="radio"是单选框，注意：一组单选框，必须要设置相同的name属性值，value属性设置表单元素保存的值，

   checked属性设置默认选中,该属性的属性值也是checked，在html中如果属性值跟属性名相同，可以省略属性值

4. type="checkbox"是复选框，也可以使用checked属性

5. type="file"是文件域，该标签用于选择文件

6. type="button"是普通按钮

7. type="submit"是提交按钮，用于将表单里面的数据向服务器提交，disabled属性设置表单元素禁用

8. type="reset"是重置按钮，用于清空表单里面的填写内容

9. type="image"是图片提交按钮，它不需要通过value属性设置文本，但是需要通过src属性设置一张图片

10. type="hidden"是隐藏域，用于在网页中隐藏信息。在实际开发中，隐藏域里面的信息是需要加密存储的

11. select标签是下拉框，option是下拉框的选项标签，value属性设置每个选项的值，

    注意：值可能跟显示的文本不一样，selected属性设置默认选中

12. textarea标签是文本域，其实就是多行文本框，rows属性设置行数，cols属性设置每行列数， 

    readonly属性表示只读

### 7.html5新增表单元素

1. type="number"是数字文本框，min设置最小值，max设置最大值，step设置增量值
2. type="range"是滑块，min，max，step用法同number
3. type="url"是网址文本框，输入的内容必须以ftp: 或者 http: 或者 https: 开头
4. type="email"是邮箱文本框，输入的内容必须包含@字符
5. type="search"其实就是文本框，只是专门用于做搜索框用，输入内容后，带有清空内容的小按钮
6. `<button type="submit">提交按钮</button>`
7. `<button type="reset">重置按钮</button>`
8. `<button type="button">普通按钮</button>`
9. 新增属性：
   1. placeholder属性设置文本框里面的提示内容，当在文本框中输入真正的内容时，会自动消失
   2. required属性给文本框，添加非空验证
   3. pattern属性用于给文本框，添加正则表达式验证



## 三、初始样式

### 1.行内样式表

通过在标签中使用style属性的方式，可以给标签添加行内样式

在实际开发中，不推荐使用行内样式，因为行内样式不方便样式的复用

行内样式，违反了内容与表现分离的原则，网页后期改版会变复杂

更关键的是，这样的网页不利于搜索引擎搜索

### 2.内部样式表

在head标签中通过style标签，定义内部样式。style标签可以通过type属性明确里面的样式类型，type属性可以省略

内部样式表：可以做到当前页面的样式复用，但是不能做到多页面样式的复用，内容与表现的分离不够彻底

在style标签里面，通过定义选择器的方式，定义样式

下面的样式就是根据p标签的名称定义选择器，给p标签添加样式：

```css
p{
     font-size: 30px;
     color: red;
}
```

### 3.外部样式表

通过link标签，引入外部样式文件，href属性设置样式文件的路径

注意：必须设置rel属性的属性值为stylesheet。告诉浏览器引入的外部资源是样式表资源

如果有多个页面需要该样式，直接引入，方便多页面样式的复用

网页的内容和样式彻底分离，这样的网页更利用搜索引擎搜索

```html
<link rel="stylesheet" href="./css/style.css">
```

引入外部样式文件的第二种方式，在style标签中，通过@import方式导入指定的样式文件

```html
<style>
@import url('./css/style02.css');
</style
```

### 4.样式的优先级

外部样式和内部样式的优先级采用：就近原则，后引入的，优先级更高

行内样式的优先级最高

### 5.选择器

#### 1.基本选择器

标签选择器：以标签的名称作为选择器的名称，对所有该标签添加样式

类选择器：选择器的名称是自定义的，必须以.符号开头。在标签中，通过class属性调用具体的类选择器样式，在标签中使用时，不需要加.号

id选择器：选择器的名称也是自定义的，必须以#符号开头。在标签中，通过id属性调用具体的id选择器样式，在标签中使用时，不需要加#号

注意：在网页中，标签的id属性值，通常是不能重复的。id选择器的优先级更高

#### 2.基本选择器的优先级

基本选择器的优先级：id选择器 > 类选择器 > 标签选择器

注意： !important的优先级最高

#### 3.层次选择器

后代选择器，方式是：A B{}。对A里面的所有B添加样式

子选择器，方式是：A>B{}。 对A里面的所有第一级的B添加样式

相邻兄弟选择器，方式是：A+B{}，B必须是A相邻的下一个元素

通用兄弟选择器，方式是：A~B{}，对A下面的所有的B元素添加样式

#### 4.属性选择器

属性选择器，方式是：[属性名]{}，通常会配合其他选择器一起使用，比如：li[属性名]，只针对li标签

属性选择器，可以根据属性值，精确的对某些标签添加样式

$= 表示以指定的属性值结尾

^= 表示以指定的属性值开头

*= 表示属性值包含指定的内容

实际案例：给以.png结尾的图片，设置大小

```css
img[src $= '.png']{
    width: 100px;
    height: 100px;
}
```

#### 5.交集选择器

交集选择器，方式是：选择器A选择器B{}，同时满足A和B的元素，添加样式

```css
a.red{
    color:red
}
```

#### 6.并集选择器

并集选择器，方式是：A,B,C{}，给多个选择器，设置相同的样式

案例：.header里面的.nav 和 .centent里面的p 和 #two上面的.three，采用相同的样式

```css
.header .nav,.centent p,#two.three{
    font-size: 20px;
    color: red;
}
```



## 四、基础样式

### 1.字体样式

* font-size 设置字体的大小

  单位：px是像素

* font-family 设置字体的类型

  font-family 可以设置中文字体类型，也可以设置英文字体类型，如果需要同时设置英文字体类型和中文字体类型，先设置英文，再设置中文

```css
font-family: 'Courier New','幼圆'
```

* font-weight 设置字体的粗细，属性值bold表示加粗

* font-style 设置字体的风格，属性值italic表示倾斜

* font是字体的缩写属性，可以同时设置：风格 加粗 大小 类型

  风格和加粗的顺序可以变化，也可以省略，最后两个属性值必须是大小和类型

  特殊用法：20px是字体大小，40px是行高

```css
font:20px/40px '楷体'
```

### 2.文本样式

* color 是文本颜色

  颜色值可以是英文单词

  颜色值可以是十六进制颜色值，方式是：#红绿蓝

  下面属性值里面的ff其实是十六进制的255

```css
color: #ff0000;
```

​	颜色值可以是十进制颜色值，方式是：rgb(红,绿,蓝)

```css
color: rgb(255,0,0);
```

​	rgba(红,绿,蓝,透明度)，注意：透明度的取值范围是：0-1

```css
color: rgba(255, 0, 0, 0.5);
```

​	十六进制颜色值，加透明度的方式是：#红绿蓝透明度。注意：这里的透明度的取值范围是0-255

```css
color: #ff000055
```

* text-align 是文本对齐方式，属性值包括：left(默认值)，center，right

* text-indent 是首行缩进，首行通常需要缩进两个字符，所有属性值单位通常使用em或者rem

  一个em大小就是当前元素字体的大小尺寸。一个rem的大小默认是网页字体的默认大小(16px)

* line-height 是行高

* text-decoration 是文本装饰，属性值包括：underline(下划线)，overLine(上划线),line-through(删除线),none(没有装饰)

  可以通过text-decoration属性，去掉超链接的默认下划线

* letter-spacing 是字符间距

* word-spacing 是单词间距

### 3.超链接样式

* a:link 表示未点击的样式

* a:visited 表示点击过后的样式

* a:hover 表示鼠标悬停样式

* a:active 表示点击未释放样式

注意：顺序必须是：a:link  a:visited  a:hover  a:active

一般情况下，我们会先给a元素设置统一的样式，再添加一个a:hover

### 4.列表样式

* list-style-type 设置列表样式，属性值none，表示无样式

  其它属性值，包括：disc(实心圆) circle(空心圆) square(方块) decimal(数字)

  所以，所谓有序列表和无需列表，只是默认的列表样式值不同

* list-style-image 设置列表的样式为图标

* list-style-position 设置列表样式的位置，属性值包括：inside 和 outside(默认值)，inside属性值，列表会往里缩进一个tab符

* list-style 是缩写属性，既可以设置列表符号类型，也可以设置列表图标

### 5.背景样式

* background-color 背景颜色

* background-image  背景图片

* background-repeat  背景图片的平铺方式，

  属性值包括：no-repeat(不平铺) repeat(平铺) repeat-x(X轴平铺) repeat-y(Y轴平铺)

* background-position  背景图片的位置，

  可以通过：left right top bottom center 这些方位值设背景图片的具体位置，

  也可以通过：具体的数字设置X轴和Y轴的位置，

  还可以通过：百分比设置X轴和Y轴的位置，

  无论是给具体的数字，还是给具体的百分比，如果只传一个值，X轴和Y轴的位置相同

* background-size 属性设置背景图片的大小，

  属性值contain，表示：等比拉伸，直到跟任意一边与容器边框重叠，

  属性值cover，表示：等比拉伸，直到跟所有边与容器边框重叠，

  可以设置固定的大小，一般不推荐，因为会使图片变形，

  属性值也可以设置百分比

* background 是背景的缩写属性，可以同时设置背景颜色，背景图片，平铺方式，位置，

  各属性值，没有严格的顺序

  如果要加背景图片的大小,方式是：颜色 图片 平铺方式 位置 / 背景图片大小

```css
background:red url(./img/zhl.jpg) no-repeat center / 300px 300px
```

### 6.背景渐变

linear-gradient()函数，用于设置背景的线性渐变

该函数的第一个参数值是渐变的方向，后面的参数值是渐变的颜色

```css
background: linear-gradient(to left top,red,blue,green,purple)
```

radial-gradient()函数，用于设置背景的径向渐变

该函数不需要传渐变方向，直接传渐变的颜色，从中间向外渐变

```css
background: radial-gradient(red,blue,green)
```

### 7.文本垂直居中

如果只有一行文本内容，可以通过设置line-height:height(行高=高度)的方式，设置文本垂直居中

### 8.文本阴影

text-shadow 属性设置文本阴影

属性值分别是：X轴偏移量 Y轴偏移量 阴影的模糊半径 阴影颜色

### 9.图片对齐方式

图片的vertical-align样式，可以设置图片两端文本相对于图片的对齐方式

属性值包括了：top bottom middle



## 五、盒子模型

### 1.什么是盒子模型

网页里面的每一个标签，都可以当做是一个盒子，该盒子是用来放内容的

通过：宽高，内边距，边框，外边距定义盒子

### 2.边框

每条边框可以通过三个属性设置，分别设置：边框宽度 边框颜色 边框类型

边框类型solid，表示实线

边框类型double，表示双实线

边框类型dashed，表示虚线

边框类型dotted，表示点线

通常情况下，盒子的四条边框的样式应该是统一的，可以通过下面的三个属性去统一设置

```css
border: 10px tomato dotted
```

去掉文本框的轮廓线

```css
outline: none
```

### 3.内边距

可以分别设置盒子四个方向的内边距

```css
padding-top: 20px;
padding-right: 40px;
padding-bottom: 60px;
padding-left: 80px;
```

padding是缩写属性，可以分别设置：上 右 下 左 四条边的内边距。（顺序是顺时针）

```css
padding: 20px 40px 60px 80px;
```

padding如果只设置3个属性值，分别是：上 右 下，左边采用右边的值

```css
padding: 20px 40px 60px
```

padding如果只设置2个属性值，分别是：上 右，左边采用右边的值，下面采用上面的值

```css
padding: 20px 40px
```

padding如果只设置1个属性值，表示上 右 下 左采用相同的内边距

```css
padding: 20px
```

### 4.外边距

外边距是设置盒子与盒子的间距

```css
margin-top: 50px;
margin-right: 50px;
margin-bottom: 100px;
margin-left: 100px;
```

注意：上下两个盒子的间距，采用上面盒子的底边距和下面盒子的上边距的最大值

margin的缩写属性，用法根padding一样

### 5.盒子居中

因为网页中的很多标签，都有默认的样式，在实际开发中，我们又不需要这些默认的样式，

所以，可以使用通用选择器，去掉这些默认样式

```css
*{
    /* 去掉外边距 */
    margin: 0;
    /* 去掉内边距 */
    padding: 0;
    /* 去掉列表符号 */
    list-style: none;
    /* 去掉轮廓线 */
    outline: none;
    /* 去掉下划线 */
    text-decoration: none;
}
```

如果设置盒子居中显示。属性值auto，表示自动，左右外边距的属性值为auto，会自动平分剩余的空间

```css
margin: 0 auto
```

### 6.盒子尺寸

width和height属性设盒子内容区域的大小

border，padding，margin 会增长盒子的整体尺寸

盒子的实际宽度= width + border-left + border-right + padding-left + padding-right + margin-left + margin-right

box-sizing属性设置盒子的类型，默认值是content-box，是内容盒子，表示width和height的空间全部给内容

属性值border-box，是边框盒子，盒子的边框和内边距产生的空间从width和height里面扣除

### 7.display属性

块级元素：特点是独占一行，可以识别宽高属性

一个块级元素的实际宽度 = width + border-left/right + padding-left/right + margin-left/right

margin-right属性的默认值是auto，所以，剩余的空间会给margin-right

行级元素：特点是按行显示，一行不够放，会自动换行，不识别宽高属性，它的实际大小还有内容决定

通过display属性，可以设置标签的显示方式，inline表示行内元素，block表示块级元素，none表示不显示

inline-block表示行内块元素，既有块级元素可以识别宽高的特点，又有行内元素在一行显示的特点

### 8.盒子阴影

盒子阴影：属性值分别是：X轴偏移量 Y轴偏移量 模糊半径 阴影颜色

```css
box-shadow: 10px 10px 5px blue
```

第一个属性值设置为inset，表示内阴影

```css
box-shadow:inset 0px 0px 30px blue
```

### 9.圆角边框

分别设置4个角的圆角

```css
border-top-left-radius: 20px;
border-top-right-radius: 40px;
border-bottom-right-radius: 60px;
border-bottom-left-radius: 80px;
```

一个属性值是横向宽度，第二个属性值是纵向宽度，这样的圆角就是椭圆圆角

```css
border-top-left-radius: 20px 40px;
border-top-right-radius: 40px 60px;
border-bottom-right-radius: 60px 80px;
border-bottom-left-radius: 80px 100px;
```

border-radius是缩写属性，可以同时设置：左上 右上 右下 左下，四个角的圆角

```css
border-radius: 20px 40px 60px 80px;
```

四个角的圆角都设置为50%，就是正圆

``` css
border-radius: 50%;
```



## 五、浮动

### 1.float

浮动样式主要用于对块元素的布局

元素一旦浮动起来，就会脱离标准文档流

float属性设置浮动，属性值包括left(左浮动)，right(右浮动)，none(不浮动)

### 2.clear

用于清除浮动。属性值包括：left(清除左浮动)，right(清除右浮动)，both(清除全部浮动)

### 3.解决父级边框塌陷

方式一：

在标准文档流中，父级如果不指定高度，高度由子级撑开。

如果子级浮动，父级的边框就会塌陷，第一种解决的方法是：给父级一个明确的高度。

方式二：

在父级的最下面，添加一个不浮动的元素，并清除前面的浮动空间。

方式三：

通过伪元素样式在父级的下面添加块级元素，再利用该块级元素清除前面的浮动，原理根方法2一样。

::after表示在指定的父级的下面，添加元素

::before表示在指定的父级的上面，添加元素

``` css
.parent::after{
      /* content属性里面设置添加的元素里面的内容 */
      content: '';
      /* 下面是设置该元素的样式 */
      display: block;
      clear: both;
}
```

方式四：

给父级添加一个overflow属性，属性值是非visible。

### 4.overflow

overflow属性，用于设置溢出处理

属性值包括：visible(溢出部分显示，是默认值)

hidden(溢出部分隐藏)

scroll(溢出部分，通过滚动条查看)，如果内容不溢出，还是会出现滚动条的区域

auto(自动，如果内容溢出，出现滚动条；没有溢出，不会出现滚动条区域)

### 5.overflow配合锚链接

overflow配合锚链接的使用，可以增长一个盒子的实际使用空间

id属性值可以作为锚链接的锚标记使用

### 6.文本溢出处理

white-space 属性设置空白处理，属性值nowrap，表示设置文本不换行，属性值pre，表示保留空格

overflow 属性是溢出处理，属性值hidden表示溢出部分隐藏

text-overflow 属性设置文本溢出处理，属性值ellipsis表示文本溢出部分显示...

注意：上面的三个属性值缺一不可

``` css
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
```

### 7 多行文本溢出处理

``` css
display:-webkit-box; 
overflow:hidden;
text-overflow:ellipsis; 
word-break:break-all;
-webkit-box-orient:vertical; //子元素应该被水平或垂直排列
-webkit-line-clamp:3; //3行后显示省略号
```



## 六、定位

### 1.static

position 是定位属性，属性值包括：static(不定位，默认值)

### 2.relative

relative(相对定位)，是相对于自己重新定位，通过top，bottom，left，right属性控制定位的偏移量

### 3.absolute

absolute(绝对定位)。绝对定位是根据离它最近的父级定位元素进行定位

如果它的父级中，没有定位元素，就根据浏览器的视口来定位

注意：绝对定位元素，会脱离标准文档流，所以，它下面的元素会去抢占它原来的位置

通常情况下：一个父容器里的子元素，如果要进行调整位置

父容器先设置为相对定位，并且不设置偏移量，子元素再设置为绝对定位，

这样，子元素就可以在该父元素中精细调整了

### 4.fixed

fixed(固定定位)。就是根据浏览器的视口进行定位

并且定位后的位置，不会随着浏览器滚动条的滚动而消失

### 5.z-index

元素定位后，默认情况下，后面的元素会盖住签名的元素

通过z-index属性，可以修改定位元素的层叠顺序，值越小越靠下，值越大越靠上，可以设置负数，默认值0

### 6.盒子水平和垂直方向居中

```css
/* 子级设置为绝对定位 */
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
```

非定位元素的实际宽度 = width + border-left + border-right + padding-left + padding-right + margin-left + margin-right

定位元素的实际宽度 = width + border-left + border-right + padding-left + padding-right + margin-left + margin-right + left + right

### 7.透明度

opacity属性，设置透明度，注意：是设置整个元素的透明度

取值范围是：0-1，0是全透明，1是不透明

### 8.背景样式补充

设置背景颜色 background-color

设置背景图片 background-image

设置背景平铺方式 background-repeat，默认是X轴和Y轴方向都平铺

设置背景图片的位置 background-position

设置背景图片的大小 background-size

设置背景的填充区域 background-clip

属性值有：

border-box 到边框，默认值

padding-box 到内填充

content-box 到内容

background-origin 只能设置背景图片的填充区域，不能控制背景颜色

background-attachment 设置背景图片的定位方式：

设置属性值为fixed，表示固定背景图片

在缩写属性中，如果同时设置了背景位置和背景大小，方式是：位置 / 大小

``` css
background: fixed url() content-box 40px 40px / 600px 400px;
```



## 七、补充内容

### 1.结构伪类选择器：

:first-child 表示指定标签的第一个

注意：这里ul里面的第一个元素如果不是li，该样式失效

``` css
ul li:first-child{
      color: red;
}
```

:last-child 表示指定标签的最后一个

注意：这里ul里面的最后一个元素如果不是li，该样式失效

``` css
ul li:last-child{
      color: green;
}
```

:nth-child(n) 表示指定标签的第n个

odd表示所有的奇数行（也可以用2n-1），even表示所有的偶数行（也可以用2n）

:first-of-type和:first-child的区别是：

:first-child：计算索引时，统计的是所有的子元素

:first-of-type 计算索引时，只统计指定的子元素

:last-of-type和:last-child的区别同上

:nth-of-type和:nth-child的区别同上

### 2.内嵌框架

iframe 是内嵌框架标签，用于在当前网页中，嵌入另一个完整的网页，通过src属性设置目标网页的地址

frameborder属性设置边框，属性值包括0和1

scrolling属性设置是否显示滚动条，属性值包括no和 yes 和 auto

### 3.video

video标签，用于播放视频，src属性设置视频路径，controls属性显示控件按钮，autoplay属性设置自动播放，loop属性设置循环播放

通过source子标签，给video标签添加视频路径，好处是，该方式可以同时添加多个视频路径

由于不同浏览器对视频格式的兼容性，存在差异，所以，会导致，指定格式的视频在部分浏览器中无法播放

通常情况下，如果在网页中需要播放视频，会将同一个视频转成多种格式，通过source标签引入

浏览器会挨个加载source标签引入的视频，直到找到一个可以播放的格式

video标签里面的写的其他标签，在浏览器不识别video标签时显示

### 4.audio

audio是音频标签，用于播放音频，用法根video一样

### 5.HTML5结构标签

过去，我们在布局网页的时候，全部采用div标签，给div标签定义不同的id名称，

用该id名称去表示它所处的区域是网页的哪一个部分

现在，HTML5给我们新推出了一些，专门用于布局的结构标签：

header 头部

nav 导航

main 主体

aside 侧边栏

section 独立区域（网页中有多个独立区域时，用section）

article 独立内容（网页中只有一个独立区域时，用article）

footer 尾部

fieldset标签，用于设置一个分组区域，通过legend子标签设置分组标题。



## 八、动画

### 1.css3-过渡

transition 过渡属性

过渡：css从一种状态变化到另一种状态的过程

transition-property 设置哪些属性，需要过渡效果，可以传多个过渡的属性，使用逗号隔开

例如： transition-property: background-color,width，属性值设置为all，表示过渡全部属性

transition-duration 设置过渡的时间，就是完成整个效果，需要花费的时间，单位可以是秒(s)或者毫秒(ms)

transition-delay 设置过渡之前的等待时间，单位同transition-duration

transition-timing-function 设置过渡的动作函数：

默认值是 ease 表示先快速再慢速

linear 表示匀速

ease-in 表示加速

ease-out 表示减速

ease-in-out 表示先加速再减速

transition是过渡的缩写属性，四个属性值的顺序没有要求，但是如果设置了两个时间，第一个是过渡时间，第二个过渡等待时间

### 2.css3-动画

animation-name 指定动画的名称（指定一个动画的关键帧名称，就是动画的规则）

animation-duration 指定动画的时间（完成该动画需要多少时间）

animation-delay 动画的延迟播放时间

animation-timing-function 动画的动作函数，ease linear ease-in ease-out ease-in-out

animation-iteration-count 设置动画的播放次数 属性值可以给具体的次数，如果设置属性值为infinite，表示无限次数

animation-play-state 表示播放状态，默认值是running(播放) paused(暂停)

animation-direction 表示动画的方向，属性值包括：

normal(正向)  reverse(反向) alternate(正反方向重复运动) alternate-reverse(反正方向重复运动)

animation-fill-mode 表示填充模式，其实就是动画结束后，元素的回到什么位置，属性值包括：

backwards(回到原点位置)，在开始动画之前，等待的时间在开始动画处等待，

forwards(停在结束位置)，在开始动画之前，等待的时间在原点位置处等待，

both(综合了上面两个属性的特点)，在开始动画处等待，在动画结束处停止，

animation是缩写属性，具体的属性值，没有顺序要求，如果同时设置动画时间和等待时间，第一个是动画时间，第二个是等待时间

### 3.关键帧

定义动画的关键帧，关键帧就是动画的规则，在css中，一个动画最多可以拆分成100份

```css
@keyframes move{
    /* from 是动画的起始位置 */
    from{
        left: 0;
    }
    /* to  是动画的结束位置*/
    to{
        left:500px
    }
}
```

定义动画的关键帧，将动画的规则，拆分成多组

``` css
@keyframes move2{
    0%{
        left:100px;
        top: 0;
    }
    25%{
        left: 500px;
        top: 0;
    }
    50%{
        left:500px;
        top:500px
    }
    75%{
        left:0;
        top:500px;
    }
    100%{
        left: 0;
        top:100px;
    }
}
```

### 4.css3-变形

transform 是css的变形属性，通过变形函数，设置具体的变形方式

scale()变形函数，设置元素缩放

translate()变形函数，设置元素平移，该函数如果只传一个参数，表示X轴方向平移，如果传两个参数，第二个参数是Y轴方向平移

rotate()变形函数，设置元素旋转。属性值的单位是deg(度数)，也可以是turn(圈)，属性值，正数是顺时针，负数是逆时针

skew()变形函数，设置元素倾斜。该函数如果只传一个参数，表示X轴方向倾斜度数，如果传两个参数，第二个参数是Y轴方向倾斜度数

### 5.动作函数补充

transition-timing-function 设置动作函数

属性值包括：ease linear ease-in ease-out ease-in-out

动作函数的取值，除了一些常规的属性值，还可以里贝塞尔曲线函数，定义特殊规则的动作

```css
transition-timing-function: cubic-bezier(.22,1.52,.42,-0.72);
```

通过steps() 函数，可以将一个动作分解成多次运行

``` css
animation: move 12s infinite steps(4)
```

### 6.3D变形

perspective 属性设置浏览器的视距：就是告诉浏览器平移到眼睛的距离是多少，一般范围我们会控制在600px-1200px

``` css
body{
    height: 600px;
    border: 1px solid green;
    perspective: 800px;
}
```

translateX() 是X轴方向平移

translateY() 是Y轴方向平移

translateZ() 是Z轴方向平移

rotate()  默认是久Z轴方向旋转

rotateZ()  是Z轴方向旋转

rotateX()  是X轴方向旋转

rotateY()  是Y轴方向旋转

3d变形样式 transform-style: preserve-3d;

``` css
transform-style: preserve-3d;
transform: rotateY(45deg) rotateZ(-45deg);
animation: love 4s infinite alternate;
```

visibility属性，用于设置元素的显示方式，属性值包括：hidden（隐藏），visible（显示）

backface-visibility属性，用于设置元素的背面颜色方式

backface-visibility: hidden，表示背面隐藏



## 九、iconfont

### 1.字体图标

```html
<!--本地引入-->
<link rel="stylesheet" href="./iconfont/iconfont.css">
<!--在线使用iconfont字体图标-->
<link rel="stylesheet" href="//at.alicdn.com/t/font_2502001_xzq5sve8osd.css">
<!--i 标签 专门用于定义字体图标-->
<i class="iconfont icon-gouwuche"></i>
```

### 2.自定义字体类型

``` css
@font-face {
    /* 设置字体类型名称 */
    font-family: gjm;
    /* 设置字体类型文件的路径 */
    src: url(./font/郭敬明字体.ttf);
}
div{
    font-size: 50px;
    font-family: gjm;
}
```

### 3.CSS绘制三角形

``` css
/* 保留上边框，下边框的宽度设为0 */
.a{
    border-color: transparent;
    border-top-color: red;
    border-width: 50px 50px 0 50px;
}
/* 保留右边框，左边框的宽度设为0 */
.b{
    border-color: transparent;
    border-right-color: blue;
    border-width: 50px 50px 50px 0;
}
/* 保留下边框，上边框的宽度设为0 */
.c{
    border-color: transparent;
    border-bottom-color: green;
    border-width: 0 50px 50px 50px;
}
/* 保留左边框，右边框的宽度设为0 */
.d{
    border-color: transparent;
    border-left-color: orange;
    border-width: 50px 0 50px 50px;
}
```

## 十、弹性布局

### 1.弹性盒子

display属性，设置元素的类型，属性值包括：none(不显示)，inline(行内元素)，block(块级元素)，inline-block(行内块元素)

设置display: flex，该盒子就成为了弹性盒子，一旦给一个盒子设置为了弹性盒子，它里面的子元素默认就会横向排列

flex-direction属性 设置子元素的排列方向，属性值包括：row(横向) column(纵向) row-reverse(横向反向) column-reverse(纵向方向)

### 2.子元素的对齐方式

主轴的排列方式，通过justify-content属性控制

属性值包括：flex-start(开始处对齐) flex-end(结束处对齐) center(居中对齐) space-between(平均分布，开始和结束处顶格)，space-around(平均分布，两边留有一半的间隔空间) space-evenly(平均分布，每个元素两端的间隔相等)

辅轴的排列方式，通过align-items属性控制

属性值包括： flex-start(开始处对齐) flex-end(结束处对齐) center(居中对齐) baseline(首行文本的基线对齐) stretch(拉伸对齐)

注意：主轴不一定是横向，排列方向如果是横向，主轴是横向；排列方向如果是纵向，主轴就是纵向

### 3.子元素的换行方式

flex-wrap属性，设置弹性盒子内，子元素的换行方式

属性值包括： nowrap(不换行) wrap(换行) wrap-reverse(反向换行)

align-content属性，设置子元素换行后，每行元素在辅轴上的对齐方式

注意：一旦设置了align-content，align-items属性就失效了

align-content的属性值包括：flex-start(开始处对齐)  flex-end(结束处对齐) center(居中对齐) space-between(平均分布，开始和结束处顶格)，space-around(平均分布，两边留有一半的间隔空间) space-evenly(平均分布，每个元素两端的间隔相等)

总结：不换行，辅轴上的对齐方式用align-items，换行后，辅轴上的对齐方式用 align-content

### 4.子元素order属性

order属性，用于设置子元素的排列顺序，默认值是1，值越小越靠前，值越大越靠后

### 5.子元素margin属性

子元素通过margin属性，可以抢占父级的剩余空间作为自己的外边距

### 6.子元素align-self属性

align-items属性设置所有弹性子元素在辅轴上的对齐方式

align-self属性，用于设置弹性子元素自身在 辅轴 方向上的对齐方式

属性值包括：flex-start，flex-end，center，baseline，stretch

### 7.子元素flex属性

flex属性用于指定弹性子元素如何分配空间

.b为flex:5，.c为flex: 1 表示剩余的空间，b占5份，c占1份



## 十一、移动端

### 1.什么是像素

什么是像素：就是一个发光点

我们在编写网页的时候，所说的像素，其实是css像素

比如我们的显示器的分辨率是1920*1080，这里的1920是物理像素

一般情况下，一个css像素对应一个物理像素

如果浏览器放大两倍，此时就会是一个css像素对应两个物理像素

在移动端，通常的做法就是一个css像素对应多个物理像素，一般采用的是两个或者三个物理像素

由于我们的显示器，默认是放大125%，所有，在默认浏览器中css像素跟物理像素的比例是 1 : 1.25。1个css像素的宽度 对应  1.25个物理像素的宽度

### 2.移动端网页

在移动端：iphone6手机的分辨率：750*1334（物理像素）

在iphone6中 css像素是375*667，所以，css像素和物理像素的比例是 1 : 2

iphone6Plus手机的分辨率：828*1472

在iphone6Plus中 css像素是414*736，所以，css像素和物理像素的比例是 1 : 2

100vw就表示显示屏全屏宽度，100vh就是表示显示屏全屏高度

在iphone6中 100vw = 375px

1px = 0.266666vw

2.66666vw就相当于10px

5.33333vw就相当于20px

<span style="color:red">因为字体的最小单位是12px，所以我们将上面的比例再 * 2</span>

font-size: 5.33333vw

em是当前元素字体大小单位

rem是网页根元素字体大小单位

默认情况下，1rem=16px，但是这里的rem已经被我们重新定义过了

1rem=5.33333vw 在iphone6中是20px

``` css
html{
    font-size: 5.33333vw 
}
.a{
    width: 100vw;
    height: 100px;
    background-color: red;
}
.b{
    width:5rem;
    height: 5rem;
    background-color: green;
    font-size: 1rem;
}
```

### 3.视口

name="viewport"就是设置视口

设置width属性值为device-width，采用设备的宽度

initial-scale=1.0 表示初始缩放比例为1.0

默认情况下，在移动端视口的宽度是980px，根据需要，可以修改视口宽度

如果我们需要将一个pc端的网页，在移动端能够完全打开，通常修改设置固定宽度的视口值

``` html
<meta name="viewport" content="width=1226">
```

### 4.媒体查询

媒体查询：让一个网页在不同的设备上都能够正常显示

视口宽度>=1200px 的屏幕 称为超大屏

视口宽度>=992px 的屏幕 称为大屏

视口宽度>=768px 的屏幕 称为中屏

视口宽度>=576px 的屏幕 称为小屏

视口宽度<576px 的屏幕 称为超小屏

定义媒体查询样式：

screen 表示屏幕

max-width: 1200px 表示最大宽度小于1200px，执行下面的样式

```css
@media screen and (max-width: 1200px) {
    /* 这里面写的都是样式 */
    .a {
        background-color: lightgreen;
        color: white;
    }
}
@media screen and (max-width: 992px) {
    .a{
        background-color: lightblue;
        color: orange;
        font-size: 40px;
    }
}
@media screen and (max-width: 768px) {
    .a{
        background-color: lightsalmon;
        color: orchid;
        font-size: 30px;
    }
}
@media screen and (max-width: 576px) {
    .a{
        background-color: lightseagreen;
        color: pink;
        font-size: 20px;
    }
}
```







