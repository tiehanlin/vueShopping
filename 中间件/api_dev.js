var express =require('express');
var app=express();

//第一个nodejs接口
app.get("/xxx",function(req,res){
	console.log(("xxx,start"))
	res.end();
})
app.listen(5678,function(){
	console.log("5678,中间启动")
});
