var express =require('express');
var app=express();
// 解决跨域问题，网上成熟的解决方案，我是直接拷贝的
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//用来临时存数据
var _xxObj=null;
//接受
app.get("/node_a",function(req,res){
	console.log(req.query.xxval)
	_xxObj=req.query;
	res.end();
})
//发送
app.get("/node_b",function(req,res){
	res.send(_xxObj.xxval+"tietietie");
})
app.listen(5678,function(){
	console.log("5678,中间启动")
})