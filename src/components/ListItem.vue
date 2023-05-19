<template>
  <div class="list-item">
    <div class="list-item__fio">
      <div class="list-item__fio_name">
        {{ form.firstName }}
      </div>
      <div class="list-item__fio_surname">
        {{ form.lastName }}
      </div>
      <div class="list-item__fio_middlename">
        {{ form.middleName }}
      </div>
    </div>
    <div class="list-item__birth-date">
      {{ form.birthDate }}
    </div>
    <div class="list-item__description">
      {{ form.description }}
    </div>
    <div class="list-item__actions">
      <button @click="openUpdate">
        Редактировать
      </button>
      <button @click="deleteUser">
        Удалить
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IForm } from '@/models/types'
import { PropType } from 'vue'


const props = defineProps({
    form: { type: Object as PropType<IForm>, required: true}
})

const openUpdate = () => {
    console.log(props)
}

const deleteUser = () => {
    console.log(props)
}

</script>

<style lang="scss" scoped>
    .list-item{
        padding: 16px;
        display: flex;
        gap: 16px;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid rgba($colorBlack, $alpha: 0.2);

        &__fio{
            display: flex;
            flex: 2;
            font-size: 20px;
            line-height: 1.5;
            align-items: center;
            gap: 16px;
        }

        &__birth-date{
            flex: 1;
            font-size: 20px;
            line-height: 1.5;
        }

        &__description{
            flex: 2;
            font-size: 12px;
            line-height: 1.4;
        }

        &__actions{
            display: flex;
            gap: 16px;
        }
    }
</style>