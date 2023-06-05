---
group:
  title: 前端编程
  path: /interview/code/
---

# JS 编程

## JsonToDom

模拟实现 React 的 render 函数，将虚拟 dom，例如下面的 json 数据：

```js
const virtualDom = {
  tag: 'DIV',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'SPAN',
      children: [{ tag: 'A', children: [] }],
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] },
      ],
    },
  ],
};
```

转化成类似下方的真实 Dom：

```html
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
```

<code src='./JsonToDom.jsx'></code>

## Tree<->List

前端组件级联的对象和后端的列表的互相转换：

级联选择器的嵌套对象：

```js
const treeData = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        parentId: 1,
      },
    ],
  },
];
```

列表形式如下：

```js
const listData = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
  },
  {
    id: 2,
    text: '节点1_1',
    parentId: 1,
  },
];
```

注意 list 转 tree 对象用到了引用值，多看看。 <code src='./treeAndList'></code>

## 改变 this 指向

手写 apply，先理解 apply 的作用：

```js
var name = 'windowName';
var obj = {
  name: 'objName',
};

function foo() {
  console.dir(this);
  console.log(this.name);
  return 'success';
}
```

- 如果直接调用`foo()`，那么会输出`window`和`windowName`;
- 如果通过 apply 改变 this 指向为 obj，即`foo.call(obj)`，那么会输出`Object`和`objName`;

要实现 apply 就要知道还有什么方式可以改变 this 的指向：隐式调用。

隐式调用是指“谁调用就是指向谁”，例如把上面函数改造成：

```js
var obj = {
  name: 'objName',
  foo: function () {
    console.dir(this);
    console.log(this.name);
    return 'success';
  },
};

obj.foo();
```

那么就会输出:

```text
{ name: 'objName', foo: [Function: foo] }
objName
```

所以手写 apply 就可以模拟隐式调用，在上下文对象新建一个属性指向这个函数，然后调用就行。

<code src='./this.jsx'></code>

## map

map 有两个参数：

- callback(cur, idx, arr)
- thisArgs

<code src='./map.jsx'></code>

## Lodash.get

lodash 的 get 方法，接受三个参数：

- obj
- keyPath，可以是数组，可以是字符串
- defaultValue，如果没取到返回的默认值

<code src='./get.jsx'></code>

## Array.flat

拍平数组，可以在原型链上直接实现，也可以声明函数；

可以用递归，也可以用 reduce 实现；

<code src='./flat.jsx'></code>

## 发布-订阅模式

<code src='./EventEmitter.jsx'></code>

## 并发限制

<code src='./MultiRequest.jsx'></code>
