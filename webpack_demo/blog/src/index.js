import {getBlogPosts} from "./data";

console.log("hello world");
console.log(getBlogPosts());

const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach(blog => {
    const li = document.createElement("li");
    li.innerText = blog;
    ul.append(li);
});
document.body.append(ul);