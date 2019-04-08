<template>
  <div>
    <h1>{{ msg }}</h1>
		<input type="text" class="leftDiv" placeholder="请输入" />
		<div class="rightDiv"></div>
		<van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'proShopCartDemo',
  data () {
    return {
      msg: '铁铁铁'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
