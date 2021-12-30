// createApp是一个工厂函数,取代Vue2中引入的Vue构造函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象app(类似与Vue2中的vm,但更轻量)
const app = createApp(App)
// console.log(app)


app.component('button-counter', {
  //组件的data必须是函数
  data: function () {   //或data(){}
      return {
          count: 0
      }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

// 挂载
app.mount('#app')



// 卸载
// app.unmount('#app')