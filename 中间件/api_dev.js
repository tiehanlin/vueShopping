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
var _xxObj= {
    arrs:[{
        id:'n1',
        name:'a_name',
        vals:'aaa'
    },{
        id:'n2',
        name:'b_name',
        vals:'bbb'
    },{
        id:'n3',
        name:'c_name',
        vals:'ccc'
    }]
};
//保存过滤的结果
var _filterResult=null;
//过滤方法
function filter(_val){
	return _xxObj.arrs.filter(_g=>{
		return _g.vals===_val
	})
}
//接受
app.get("/node_a",function(req,res){
	console.log(req.query.v_data)
	let _result=filter(req.query.v_data)//就是input输入的值
	_filterResult=_result.length!==0?_result:[{id:'xxx',name:'没有结果'}]//不等于0是查到了
	res.end();
})
//发送
app.get("/node_b",function(req,res){
	res.send(_filterResult);
})
app.listen(5678,function(){
	console.log("5678,中间启动")
})