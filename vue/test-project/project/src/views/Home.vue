<template>
  <div class="home">
  	<div class="box">
  		<h3>话题作文炼句社群第17期</h3>
  		<router-link to="/writing">
  			<img alt="Vue logo" src="../assets/img/writing.jpg">
  		</router-link>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
  .box{
  	text-align:center;
  	padding: 20px;
  	img{
  		width:150px;
  	}
  }
</style>