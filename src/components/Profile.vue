<template>
    <div class="profile">
      <h2>Thông tin cá nhân</h2>
      <p><strong>Id:</strong> {{ profile.id }}</p>
      <p><strong>Họ và tên:</strong> {{ profile.userName }}</p>
      <p><strong>Giới tính:</strong> {{ profile.gender }}</p>
      <p><strong>Ngày sinh:</strong> {{ profile.dateOfBirth }}</p>
      <p><strong>Địa chỉ:</strong> {{ profile.address }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  const profile = computed(() => store.getters['profileModule/getProfile'])
  </script>
  
  <style scoped>
  .profile {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 300px;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  </style>
  