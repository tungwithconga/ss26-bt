<template>
    <div class="random-number">
      <h2>Random Numbers: {{ randomNumbers }}</h2>
      <button @click="generateRandomNumber">Generate Random Number</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  
  const randomNumbers = computed(() => store.getters['randomNumbersModule/getRandomNumbers'])
  
  const generateRandomNumber = () => {
    store.dispatch('randomNumbersModule/generateRandomNumber')
  }
  </script>
  
  <style scoped>
  .random-number {
    text-align: center;
    margin-top: 20px;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    border: 1px solid #000;
    cursor: pointer;
  }
  </style>
  