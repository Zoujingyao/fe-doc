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

// 真正的渲染函数
function my_render(vnode) {
  // 如果是数字或字符串类型
  if (typeof vnode === 'number' || typeof vnode === 'string') {
    vnode = String(vnode);
    return document.createTextNode(String(vnode));
  }
  // vnode是对象
  const { tag, attrs = {}, children } = vnode;
  //创建dom
  const el = document.createElement(tag);
  //添加attr
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  //处理children
  if (Array.isArray(children) && children.length > 0) {
    children.forEach((child) => el.appendChild(my_render(child))); //子元素添加在父元素中
  }
  return el;
}

const MyRender = () => {
  console.log('JsonToDom: ', my_render(virtualDom));
  return 'VirtualDom -> Dom';
};

export default MyRender;
