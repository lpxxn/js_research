// 由于已经在webpack.config.js中配置了resolve.alias，所以可以直接使用utils/date
// import {dateToStr} from "../../utils/date";
import {dateToStr} from "utils/date";

console.log(dateToStr(new Date()));