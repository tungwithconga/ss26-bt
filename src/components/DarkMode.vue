<template>
    <div :class="['dark-mode', { dark: isDarkMode }]">
      <label>
        <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" />
        {{ isDarkMode ? 'Tối' : 'Sáng' }}
      </label>
    </div>
  </template>
  
  <script setup>
  import { computed, watch } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  
  const isDarkMode = computed({
    get: () => store.getters['darkModeModule/isDarkMode'],
    set: (value) => store.dispatch('darkModeModule/setDarkMode', value)
  })
  
  watch(isDarkMode, (newVal) => {
    localStorage.setItem('isDarkMode', JSON.stringify(newVal))
  })
  
  const savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))
  if (savedDarkMode !== null) {
    store.dispatch('darkModeModule/setDarkMode', savedDarkMode)
  }
  
  const toggleDarkMode = () => {
    store.dispatch('darkModeModule/toggleDarkMode')
  }
  </script>
  
  <style scoped>
  .dark-mode {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
  }
  
  .dark-mode.dark {
    background-color: black;
    color: white;
  }
  
  .dark-mode {
    background-color: white;
    color: black;
  }
  </style>
  