<template>
  <div>年龄: {{age}}</div>
  <button @click="age++">增加年龄</button>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  name: "Demo5",
  setup() {
    let age = ref(18);
    // 组合式API的形式使用生命周期(与配置项同时写时组合式优先级更高)
    // beforeCreate和created的逻辑就直接写在setup中
    console.log(`---setup---`)
    onBeforeMount(() => {
      console.log(`---onbeforeMount----`)
    })
    onMounted(() => {
      console.log(`---onmounted----`)
    })
    onBeforeUpdate(() => {
      console.log(`---onbeforeUpdate----`)
    })
    onUpdated(() => {
      console.log(`---onupdated----`)
    })
    onBeforeUnmount(() => {
      console.log(`---onbeforeUnmount----`)
    })
    onUnmounted(() => {
      console.log(`---onunmounted----`)
    })

    return {
      age,
    };
  },
  // #region
  // 通过配置项的形式使用声明周期
  /*
  beforeCreate(){
    console.log(`---beforeCreate---`)
  },
  created(){
    console.log(`---created---`)
  },
  beforeMount(){
    console.log(`---beforeMount----`)
  },
  mounted(){
    console.log(`---mounted----`)
  },
  beforeUpdate(){
    console.log(`---beforeUpdate---`)
  },
  updated(){
    console.log(`---updated---`)
  },
  // 代替Vue2的beforeDestroy
  beforeUnmount(){
    console.log(`---beforeDestroy----`)
  },
  // 代替Vue2的destroy
  unmounted(){
    console.log(`---destroyed---`)
  }
  */
  // #endregion

};
</script>

<style>
</style>