<template>
    <div class="change-state">
      <h2>{{ company }}</h2>
      <button @click="changeState">Change state</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  
  const company = computed(() => store.getters['changeStateModule/getCompany'])
  
  const changeState = () => {
    store.dispatch('changeStateModule/toggleCompany')
  }
  </script>
  
  <style scoped>
  .change-state {
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
  