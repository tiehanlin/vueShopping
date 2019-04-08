<template>
	<div>
		<h1>{{ msg }}</h1>
		<div class="wrapDiv">
			<input type="text" class="leftDiv" ref="inputRef" placeholder="请输入" />
			<div class="rightDiv">{{txt_data}}</div>
		</div>
		<van-button type="info" @click="sendBtn">发送</van-button>
	<van-button type="info" @click="getBtn">获取</van-button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'proShopCartDemo',
		data() {
			return {
				msg: '铁铁铁',
				txt_data:''
			}
		},
		methods:{
			sendBtn(){
				let _val=this.$refs.inputRef.value;
				//console.log(_val)
				axios.get("http://localhost:5678/node_a",{
					params:{
						xxval:_val
					}
				});
			},
			getBtn(){
				axios.get("http://localhost:5678/node_b").then(_d=>{
					console.log(_d.data)
					this.txt_data=_d.data
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
	    .wrapDiv{
	  width: 80%;height: 100px;overflow: hidden;border: 1px solid #666;
	  background: #eee;border-radius: 10px;
	  margin:10px auto;
	}
	.leftDiv{
	  float: left;width: 40%;margin:10px;
	  border-radius: 10px;height: 30px;border:1px solid #999;
	  padding:10px;line-height: 30px;text-align: center;
	  font-size: 22px;
	}
	.rightDiv{
	  float: right;width: 40%;margin:10px;
	  border-radius: 10px;height: 30px;border:1px solid #999;
	  padding:10px;background: #fff;line-height: 30px;text-align: center;
	  font-size: 22px;
	}
</style>
