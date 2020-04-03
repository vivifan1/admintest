var path=require("path")
//basename 返回的最后一部分
// console.log(path.basename("a/b/c/11.js"))
//dirname 返回目录名
// console.log(path.dirname("a/b/c/11.js"))
// format 从对象中解析出路径字符串
console.log(path.format({
    dir:"/aa" ,//目录
    root:"/bb/",//目录
    base:"1.js", //文件名称 =name+exts
    name:"aaa",
    ext:".css" //后缀名
}))
// 注
// 如果dir和root同时存在，root会被忽略
// 如果base和ext/name同时存在，则会忽略ext和name
//parse 返回一个对象
// console.log(path.parse("aa/bb/cc/2.js"))
//join 将所有的名称利用path.seq连起来，再通过normalize格式化 合并成一个字符串
// console.log(path.join("/a","/b","./2.js"))
//normalize格式化 规范化返回的path
// console.log(path.normalize("/aa/////////dd/../1.js"))
//extname 获取文件后缀名
// console.log(path.extname("aa/ss/1.css"))
//resolve 获取文件绝对路径
// console.log(path.resolve("a","d","1/2"))
//relative 获取文件相对路径
var begin="c:a/s/d"
var end="c:c/v"
console.log(path.relative(begin,end))
