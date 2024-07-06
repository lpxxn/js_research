import React, { Component, useEffect, useState } from 'react';
const RouterContext = React.createContext();


function BrowserRouter(props) {
  const [path, setPath] = useState(() => {
    const {pathname} = window.location;
    return pathname || '/';
  })

  function handlePopstate() {
    const {pathname} = window.location;
    setPath(pathname);
  }

  useEffect(function(){
    console.log('useEffect in BrowserRouter');
    window.addEventListener('popstate', handlePopstate);
    return () => {
      console.log('useEffect in BrowserRouter return');
      window.addEventListener('popstate', handlePopstate);
    }
  })

  // 路由跳转
  const goPath = function(path) {
    console.log('goPath', path);
    // 改变状态
    setPath(path);
    window.history.pushState({path}, '', path);
  }

  const routerData = {
    path, goPath
  }
  return (
    <RouterContext.Provider value={routerData}>
      {props.children}
    </RouterContext.Provider>
  )
}

function Route(props) {
  const {path, component: Component} = props;
  return (
    <RouterContext.Consumer>
      {
        (ctx) => {
          console.log('Route ctx', ctx);
          return path === ctx.path ? <Component /> : null
        }
      }
    </RouterContext.Consumer>
  )
}

export {BrowserRouter, Route, RouterContext}

/*
在这段代码中，component: Component 是一种ES6解构赋值的语法糖写法。

它的作用是从 props 对象中取出 component 属性的值，并将其赋值给一个名为 Component 的新变量。

完整的解构赋值语句是这样的：

const { path, component: Component } = props;
相当于以下两行代码：

const path = props.path;
const Component = props.component;
这种写法的好处是可以在一行代码中同时从对象中提取多个属性的值，使代码更加简洁。同时，它还允许你给提取出的属性值重新命名，如果属性名称不够语义化或者有潜在的命名冲突时非常有用。

在这个例子中，component 属性的值被赋给了一个新变量 Component，通常这种做法是为了遵循JavaScript的命名约定，即组件的名称应该以大写字母开头。这样在使用该组件时就更加直观和易读。
*/