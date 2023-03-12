// 直接将css引入到js中
import './style/index.css'
import img1 from './assets/ll.png'
document.body.insertAdjacentHTML('afterbegin', '<h1>hello world</h1>')
document.body.insertAdjacentHTML('beforeend', `<img src="${img1}" alt="aaa" />`)
