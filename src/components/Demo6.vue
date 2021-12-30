<template>
	<h2>我是使用hook和toRef的Demo6组件</h2>
	<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
  <button @click="person.age++">增加年龄</button>
  <br>
  {{age}}
  <br>
  {{person.age}}
  {{c}}
  {{name}}
</template>

<script>
import { reactive,ref,toRef, toRefs } from '@vue/reactivity'
	import usePoint from '../hooks/usePoint'
	export default {
		name:'Demo6',
		setup(){
			const point = usePoint()
      let person = reactive({
        age:18
      })
      let obj1 = ref({
        a: {
          b: {
            c: 6,
          },
        },
      });
      let people = reactive({
        name:'Mike',
        sex:'男'
      })
      console.log(person)
      const age1 = person.age
      console.log('直接取person的属性')
      console.log(age1) //基本类型
      const age2 = toRef(person,'age')
      console.log('toRef响应式包装person的属性,不丢失与person的关系')
      console.log(age2) //ObjectRefImp
			return {
        point,
        age:age2,
        person,
        c:toRef(obj1.value.a.b,'c'), //取多级结构中的属性
        ...toRefs(people) //toRefs自动将对象的属性(第一级)全部包装成ObjectRefImp,解构即可
        }
		}
	}
</script>