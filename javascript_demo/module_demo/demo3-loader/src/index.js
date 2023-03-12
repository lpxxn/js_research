// 直接将css引入到js中
import './style/index.css'

document.body.insertAdjacentHTML('afterbegin', '<h1>hello world</h1>')
document.body.insertAdjacentHTML('beforeend', '<img src="12345" alt="aaa" />')
