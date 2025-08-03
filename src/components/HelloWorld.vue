<template>
  <v-container>
    <v-alert type="success">Hello from HelloWorld with Vuetify!</v-alert>
    <v-btn @click="sayHello">hello111</v-btn>
    <div class="test">
      test
    </div>
    <v-card class="ma-4 pa-4">
      <v-btn @click="counter.increment">Click</v-btn>
      <p>Count: {{ counter.count }}</p>
    </v-card>
  </v-container>
</template>

<script setup>
// 使用 Vuetify 组件即可

const sayHello = ()=>{
  console.log("hello");
  
}
import { useCounterStore } from '../store/counter'

const counter = useCounterStore()
</script>

<style scoped>
.test{
  background-color: blue;
  margin: 10px;
  border: 1px solid red;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  color: #fff;
  text-align: center;
  padding: auto;
}
</style>