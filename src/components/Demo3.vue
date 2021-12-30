<template>
  <button @click="testEmit">触发Demo3组件的Hi事件</button>
  <slot name="hello"></slot>
</template>

<script>
export default {
  name: "Demo3",
  // setup先于beforeCreate执行,因此不能访问this(undefined)
  beforeCreate() {
    console.log("----beforeCreate----");
  },
  props: ["msg"], //声明要接收的props,若不声明,则未声明的prop存放于setup参数context的attrs下
  emits: ['hi'],  //Vue3新增声明可接收自定义事件,不声明(同Vue2)亦可,但有警告
  setup(props, context) {
    console.log("----setup-----");
    console.log(props); //Proxy {msg: 'ok'}
    console.log(context)
    console.log(context.attrs); //相当于Vue2中的vc.$attrs
    console.log(context.slots)  //Proxy {_: 1, __vInternal: 1, hello: ƒ} 其中有收到的具名插槽
    function testEmit() {
      context.emit("hi", 666);
    }
    return {
      testEmit,
    };
  },
};
</script>

<style>
</style>