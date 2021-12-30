<template>
  <!-- <Demo3 @hi="showHiMsg" msg="ok">
    <template v-slot:hello>
      你好啊
    </template>
  </Demo3> -->
  <!-- <Demo4/> -->
  <!-- <button @click="isShowDemo = !isShowDemo">切换Demo5</button> -->
  <!-- <Demo5 v-if="isShowDemo" /> -->
  <Demo6/>
  <Dialog/>

  <!-- suspence为异步组件提供更好的体验,等待时渲染fallback内容 -->
  <Suspense>
    <template v-slot:default>
      <AsyncDemo/>
    </template>
    <template v-slot:fallback>
      <h3>稍等，加载中...</h3>
    </template>
	</Suspense>

</template>

<script>
// import Demo4 from "./components/Demo4";
import AsyncDemo from "./components/AsyncDemo"
import Dialog from "./components/Dialog"
import {ref} from 'vue'
import Demo6 from "./components/Demo6";
export default {
  name: "App",
  components: {
    Demo6,
    Dialog,
    AsyncDemo,
  },
  setup() {
    let isShowDemo = ref(true);
    function showHiMsg(value) {
      alert(`触发Hi事件,收到参数${value}`);
    }
    return {
      showHiMsg,
      isShowDemo,
    };
  },
};
</script>

<style>
</style>