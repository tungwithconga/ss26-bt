<template>
    <div class="counter">
      <h2>Count: {{ counter }}</h2>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  const counter = computed(() => store.getters['counterModule/getCounter'])
  
  const increment = () => {
    store.dispatch('counterModule/increment')
  }
  
  const decrement = () => {
    store.dispatch('counterModule/decrement')
  }
  </script>
  
  <style scoped>
  .counter {
    padding: 20px;
    text-align: center;
  }
  button {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
  </style>
  