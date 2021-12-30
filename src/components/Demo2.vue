<template>
  <!-- 在DOM模版中ref无需.value,Vue自动处理 -->
  <div>姓名:{{ name }}</div>
  <div>年龄:{{ age }}</div>
  <div>{{ obj1.a.b.c }}</div>
  <div>{{ obj2.a.b.c }}</div>
  <div>{{ arr }}</div>
  <button @click="sayHi">更新</button>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Demo2",
  // reactive更方便,因此一般将所有数据包装在一个对象中使用reactive处理该对象
  setup() {
    let name = ref("Mike");
    let age = ref(18);

    // ref处理对象也是经过reactive,但需经过value访问
    let obj1 = ref({
      a: {
        b: {
          c: 6,
        },
      },
    });
    let obj2 = reactive({
      a: {
        b: {
          c: 66,
        },
      },
    });
    let arr = reactive(["吃饭", "睡觉"]);

    function sayHi() {
      // ref包装的数据修改与访问都经value
      age.value = 19;
      console.log(`我叫${name.value},我${age.value}岁了`);
      console.log("obj1 " + obj1.value.a.b.c);
      // reactive包装的对象,数组可直接修改与访问(且数组无需与Vue2一样必须使用数组方法)
      arr[1] = "休息";
      console.log("obj2 " + obj2.a.b.c);
    }

    return {
      name,
      age,
      obj1,
      obj2,
      arr,
      sayHi,
    };
  },
};
</script>
<style>
</style>
