<template>
  <header>
    <nav>
      <router-link to="/">
        Home
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    box-shadow: 4px 8px 32px rgba($colorBlack, $alpha: 0.1);
}
</style>