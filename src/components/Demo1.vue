<template>
  <div>姓名:{{ name }}</div>
  <div>年龄:{{ age }}</div>
  <div>性别:{{ sex }}</div>
  <div>冲突数字以代码顺序最末优先:{{ num }}</div>
  <div><button @click="sayHello">信息</button></div>
  <div><button @click="readVue2">Vue3的setup配置中去读取Vue2中的数据、方法:无法读取</button></div>
  <div><button @click="readVue3">Vue2的配置中去读取Vue3中的数据、方法:正常</button></div>
</template>

<script>
// 使用渲染函数必须先导入
// import { h } from "vue";
export default {
  name: "Demo1",
  // 无响应式的写法
  setup() {
    let name = "Mike";
    let age = 18;
    let num = 3;

    function sayHello() {
      alert(`我叫${name},我${age}岁了`);
    }

    function readVue2() {
      console.log(this.sex);
      console.log(this.readVue3)
    }

    // setup返回对象
    return {
      name,
      age,
      num,
      sayHello,
      readVue2
    };

    //setup返回渲染函数
    // return () => h("h1", "一级标题");
  },
  // 向下兼容Vue2的写法
  data() {
    return {
      sex: "男",
      num: 2,
    };
  },
  methods: {
    readVue3() {
      console.log(this.name);
      console.log(this.readVue2);
    },
  },
};
</script>
<style>
</style>
