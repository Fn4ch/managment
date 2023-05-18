<template>
  <div class="form-controllers">
    <div class="form-controllers__fio">
      <span>ФИО</span>
      <input
        type="text"
        v-model="fio"
      >
      <div class="form-controllers__birth-date">
        <span>Дата рождения</span>
        <input
          type="text"
          v-model="birthDate"
        >
      </div>
      <div class="form-controllers__description">
        <span>Описание</span>
        <input
          type="text"
          v-model="description"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fio = ref<string>()
const birthDate = ref<string>()
const description = ref<string>()

</script>

<style lang="scss" scoped>
    
</style>