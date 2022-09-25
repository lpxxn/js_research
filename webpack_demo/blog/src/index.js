import {getBlogPosts} from "./data";

// 需要 css-loader
import "./style.css";
import DoraemonImg from "./assets/images/doraemon1.jpg";

// 导入多级目录的模块
import "./test/date/printDate";

console.log("hello world");
console.log(getBlogPosts());

const blogs = getBlogPosts();
const ul = document.createElement("ul");
// 用的 => 需要 babel 进行转换
blogs.forEach(blog => {
    const li = document.createElement("li");
    li.innerText = blog;
    ul.appendChild(li);
});
document.body.appendChild(ul);

const img = document.createElement("img");
img.src = DoraemonImg;
document.body.appendChild(img);

const h1 = document.createElement("h1");
h1.innerText = "hello world222";
document.body.appendChild(h1);