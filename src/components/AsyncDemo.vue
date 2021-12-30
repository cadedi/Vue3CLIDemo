<template>
	<div class="child">
		<h3>我是异步组件</h3>
		{{sum}}
	</div>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'AsyncDemo',
		async setup(){
			let sum = ref(0)
			let p = new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve({sum})
				},3000)
			})
			return await p
		}
    /*
    异步组件也允许以下写法
    setup(){
      let sum = ref(00)
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve({sum})
        }, 3000);
      })
    }
    */
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>