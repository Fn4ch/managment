<template>
  <div class="create-form">
    <h2>Создание новой анкеты</h2>
    <FormController />
  </div>
</template>

<script lang="ts" setup>
import FormController from '@/components/FormController.vue'


</script>

<style lang="scss" scoped>
.create-form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>