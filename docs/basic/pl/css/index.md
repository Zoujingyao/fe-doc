---
group:
  title: 三大语言
  path: /basic/pl/
---

# CSS

## 字体

【font-family 属性】

1. 最后加一个通用字体族，避免样式和理想差别过大，例如无衬线体 Sans-Serif、等宽字体 Monospace 等；
2. 建议英文字体放在中文字体后，因为例如微软雅黑中也能展示英文字体，如果微软雅黑放前面，可能英文字母也都用微软雅黑展示了。

【font-weight】

关键词 normal=400，bold=700，之前老以为 bold 是 500，难关总和设计稿有点出入 hhh；但是否能展示出字重的区别取决于字体包，有点字体只有 normal 和 bold 两种字重，所以设置 500 以上都是一样的；

【white-space】

控制浏览器如何解析代码中的空白和换行符；

- 默认 normal 多个空格会合并成一个；
- nowrap
- pre 就是保留所有；
- pre-wrap 会在一行中放不下时自动换行，避免横向滚动；
- pre-line：合并空格，保留换行；

最后：Mac 快速打开浏览器调试器的快捷键：option + Command + I；

## 求值过程

多种样式选择器可能会选中同一个元素，哪个样式生效是根据 CSS 的权重：

- \#（id 选择器）
- .（伪）类
- E（标签）

根据 DOM 树和样式规则逐层处理 CSS，包括以下几个步骤：

- filterting: 筛选作用在该元素上的样式得到声明值；
- cascading: 根据来源，!important, 书写顺序等得到优先级最高的层叠值；
- defaulting: 如果没有指定值就使用默认值，得到实际使用的值，此时值不可能为空，即指定值；
- resolving: 将相对值或者关键词转化为绝对值，例如 em 转化为 px，相对路径转为绝对路径，得到计算值；
- formatting: 将计算值进一步转换，例如将关键词、百分比都转化成绝对值，得到使用值；
- constraining: 将小数转为整数得到渲染时实际生效的实际值；

## 布局

【常规流 Normal Flow】

- 根元素、浮动和绝对定位的元素会脱离文档流
- 常规流中的盒子，会在某种**排版上下文**中参与布局

### 行级排版上下文 IFC

- 只包含行级盒子的容器会创建一个 IFC
- `text-align`和`vertical-align`分别决定盒子在水平和垂直方向上的对齐方式

### 块级排版上下文 BFC

- 会创建 BFC 的容器

  - 根元素
  - 浮动、绝对定位、inline-box（display 的值；代表本身是行级，可以放在行盒中；display: inline 的是不可以设置宽高的，而 inline-box 可以；且作为一个整体不会被拆分）
  - Flex 和 Grid 子项
  - overflow 值不是 visible 的块盒
  - display: flow-root

- 排版规则
  - 垂直 margin 合并
  - BFC 内盒子的 margin 不会与外面的合并
  - BFC 盒子不会和浮动元素重叠

### 表格排版上下文

### FlexBox 排版上下文

流式布局，一维的，可以控制子级盒子的摆放流向；

- justify-content 决定主轴元素的摆放规则；
- align-items 决定侧轴方向上元素的摆放规则；

Flexibility, 设置子项的弹性：

- flex-grow: 有剩余空间时的伸展能力
- flex-shrink: 容器空间不足时收缩的能力
- flex-basis: 没有伸展或收缩时的基础长度

### Grid 排版上下文

二维，CSS 最强大的布局方式；

- 使用 grid-template 相关属性将容器划分为网络；
- grid-line 网格线从 1 开始，通过 grid-area 属性决定每个子项占据的区域范围

【浮动】最适合用来做图片文字环绕的布局；虽然有一些清除浮动等利用 float 来实现布局的高级操作，但是现在已经有 flex/grid 来实现复杂布局了，可以让 float 回归其本身的用途。

【绝对定位】

- position 属性：
  - static: 默认值，非定位元素
  - relative: 相对自身原本位置偏移，不脱离文档流（使用 top, left, bottom, right 设置偏移长度；流内其他元素当它没有偏移一样布局）
  - absolute: 绝对定位，相对非 static 祖先元素定位
  - fixed: 相对于视口绝对定位
  - sticky
