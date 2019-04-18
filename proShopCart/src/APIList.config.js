const port=5678;
const BASEURL="http://localhost:"+port;

const API_LIST={
	//查询条件
	node_a:BASEURL+"/node_a",
	//查询结果
	node_b:BASEURL+"/node_b"
}
module.exports=API_LIST;