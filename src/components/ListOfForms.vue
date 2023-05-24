<template>
  <div class="list">
    <ListItem
      v-for="f in forms"
      :key="f.id"
      :form="f"
      @delete-form="deleteForm"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType} from 'vue'
import { IForm } from '@/models/types'
import ListItem from './ListItem.vue'

const emit = defineEmits(['delete-form'])

const deleteForm = (id: string) => {
  emit('delete-form', id)
}



defineProps({
  forms: { type: Object as PropType<IForm[]>, required: true}
})




</script>

<style lang="scss" scoped>
    .list{
      padding-top: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgba($colorBlack, $alpha: 0.2);
    }
</style>