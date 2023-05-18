<template>
  <FormsManagment />
</template>

<script setup lang="ts">
import FormsManagment from './components/FormsManagment.vue'

</script>

<style lang="scss">
@import url('@/styles/variables.scss');
@import url('@/styles/default.scss');
*,body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  @media (min-width: 1921px) {
    font-size: .8vw;
  }
}
body{
  min-height: 100%;
  height: auto;
}
</style>
