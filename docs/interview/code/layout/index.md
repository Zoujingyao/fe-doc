---
group:
  title: 前端编程
  path: /interview/code/
---

# 布局

## grid

(red)一个宽度为 320px 的盒子，里面放置若干个 100px 的正方形盒子，间距为 100px，如何布局; <code src='./grid/index.tsx'></code>

## 垂直居中

尽量使用尽可能多的方式实现子元素的垂直水平居中;

1. text-align + line-height; (❌，不行)

```css
.father {
  line-height: 300px;
  text-align: center;
}
```

2. absolute + margin

```css
.father {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

3. absolute + translate

```css
.father {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

4. flex

容器的属性：

- align-items: 定义项目在交叉轴上如何对齐，对于默认的 flex-direction 就是垂直居中；
- justify-content: 定义了项目在主轴上的对齐方式，对于默认的 flex-direction 就是水平居中；
- align-content: 定义多根主轴在交叉轴上的对齐方式，对于一根主轴不起作用；

项目的属性：

- order: 项目的排列顺序。数值越小，排列越靠前，默认为 0;
- flex-grow: 项目的放大比例，默认为 0，有多余空间也不放大；
- flex-shrink: 项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小；
- flex-basis: 在分配多余空间之前，项目占据的主轴空间；
- flex: 上面三个属性的缩写，默认为`0 1 auto`;
- align-self: 允许单个项目有与其他项目不一样的交叉轴对齐方式，可覆盖 align-items 属性；

```css
.father {
  display: flex;
}
.child {
  margin: auto;
}
/* 或者 */
.child {
  align-items: center;
  justify-content: center;
}
```

<code src='./verticalCenter/index.tsx'></code>
