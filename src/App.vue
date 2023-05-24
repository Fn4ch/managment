<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<style lang="scss">
@import url('@/styles/variables.scss');
*,body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  @media (min-width: 1921px) {
    font-size: .8vw;
  }
}
main{
  margin-top: 120px;
}
body{
  min-height: 100%;
  height: auto;
}
</style>
