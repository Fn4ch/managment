<template>
  <div class="list">
    <ListItem
      v-for="f in forms"
      :key="f.lastName"
      :form="f"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType} from 'vue'
import { IForm } from '@/models/types'
import ListItem from './ListItem.vue'


defineProps({
    forms: { type: Object as PropType<IForm[]>, required: true}
})


</script>

<style lang="scss" scoped>
    .list{
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid $colorSecondary;
    }
</style>