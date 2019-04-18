<template>
	<div>{{msg}}</div>
	
</template>
<script>
	import axios from 'axios'
	import API_LIST from '@/APIList.config.js'

	export default{
		name:"register",
		data(){
			return {
				msg:"注册页面"
			}
		}
	}
</script>