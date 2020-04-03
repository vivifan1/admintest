//url模块
var url=require("url")
// console.log(url)
//作用：
//url字符串是一个结构化的字符串
//注意：
//url模块提供了两套api处理url
//node.js遗留特有的api



// Url: [Function: Url],
//   parse: [Function: urlParse],
//   resolve: [Function: urlResolve],
//   resolveObject: [Function: urlResolveObject],
//   format: [Function: urlFormat],
//   URL: [Function: URL],
//   URLSearchParams: [Function: URLSearchParams],
//   domainToASCII: [Function: domainToASCII],
//   domainToUnicode: [Function: domainToUnicode],
//   pathToFileURL: [Function: pathToFileURL],
//   fileURLToPath: [Function: fileURLToPath]



//parse 解析url 返回一份url属性对象
//http://localhost:3000/?username=admin&password=123
// var data=url.parse("http://localhost:3000/res?username=tom&password=123",true).query   //true把地址栏的信息转化为对象
// console.log(data)

// protocol: 'http:',协议
// slashes: true,
// auth: null,    用户名
// host: 'localhost:3000', 主机名
// port: '3000',       端口号
// hostname: 'localhost', 主机名不带端口号
// hash: null,           哈希值
// search: '?username=tom&password=123',   查询字符串
// query: 'username=tom&password=123',    请求参数   针对于get
// pathname: '/res',       路径名称
// path: '/res?username=tom&password=123',    带查询的路径名
// href: 'http://localhost:3000/res?username=tom&password=123'   原字符串本身

//resolve 解析浏览器超链接 转化成基本的url
//参数：from 解析是对应的超链接的url  to 要解析的超链接
// var data =url.resolve("aa/bb/cc","dd") aa/bb/dd
// var datatwo=url.resolve("http:localhost:3000/","ffff") http:localhost:3000/ffff 有/拼接
// var datathree=url.resolve("http:localhost:3000/aa","abb")http:localhost:3000/abb 没有/替换
// console.log(datathree)

// format 返回一个格式化的url字符串
var oburl={
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:3000',
    port: '3000',
    hostname: 'localhost',
    hash: null,
    search: '?username=tom&password=123',
    query: 'username=tom&password=123',
    pathname: '/res',
    path: '/res?username=tom&password=123',
    href: 'http://localhost:3000/res?username=tom&password=123'
}
var mat=url.format(oburl)
console.log(mat)