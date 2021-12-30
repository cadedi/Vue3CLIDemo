<template>
  <button @click="person.age++">增加年龄</button>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { watch, watchEffect } from '@vue/runtime-core';
export default {
  name: "Demo4",
  setup() {
    let person = reactive({
      age: 18
    })
    // 监视属性,若监视reactive包装的对象,默认必须开启深度监视,无需在第三个参数中配置(即使配置亦无效),oldVal无法正确打印(undefined)
    // 其它对象(例如ref实例对象)都需显式开启深度监视
    watch(person,(newVal,oldVal) => {
      console.log(newVal)
      console.log(oldVal)
    },{immediate:true})

    watchEffect(() => {
      // 函数体中声明的属性才会触发监视
      const x1 = person.age
      console.log('watcheffect指定的回调执行了')
    })


    return{
      person
    }
  },
};
</script>

<style>
</style>