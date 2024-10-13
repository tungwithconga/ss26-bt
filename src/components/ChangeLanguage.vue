<template>
    <div class="language-toggle">
      <h2>{{ content.title }}</h2>
      <p>{{ content.description }}</p>
      <button @click="toggleLanguage">
        {{ language === 'vi' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed, watch } from 'vue'
  import { useStore } from 'vuex'
//   import { languages } from '../utils/languages'
  
  const store = useStore()
  
  const language = computed(() => store.getters['changeLanguageModule/getLanguage'])
  
  const content = computed(() => languages[language.value])
  
  const toggleLanguage = () => {
    const newLanguage = language.value === 'vi' ? 'en' : 'vi'
    store.dispatch('changeLanguageModule/changeLanguage', newLanguage)
  }
  
  watch(language, (newVal) => {
    localStorage.setItem('language', newVal)
  })
  
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    store.dispatch('changeLanguageModule/changeLanguage', savedLanguage)
  }
  </script>
  
  <style scoped>
  .language-toggle {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    border: 1px solid #000;
    cursor: pointer;
  }
  </style>
  