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
        {{ form.middleName ?? '' }}
      </div>
    </div>
    <div class="list-item__birth-date">
      {{ form.birthDate }}
    </div>
    <div class="list-item__description">
      {{ form.description ?? '' }}
    </div>
    <div class="list-item__actions">
      <button @click="openUpdate">
        Редактировать
      </button>
      <button @click="deleteForm">
        Удалить
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IForm } from '@/models/types'
import router from '@/router'
import { PropType } from 'vue'
import { storeToRefs } from 'pinia'
import useFormStore from '@/stores/formStore'


const props = defineProps({
  form: { type: Object as PropType<IForm>, required: true}
})

const { formState } = storeToRefs(useFormStore())

const emit = defineEmits(['deleteForm'])

// const openUpdate = () => { ебоманый роутер...
//   console.log('push')
//   router.push({
//     name: 'form-actions',
//     path: '/form-actions',
//     params: {
//       ...props.form
//     }
//   })
// }

const openUpdate = () => {
  formState.value = props.form
  router.push('/form-actions')
}

const deleteForm = () => {
  let forms :IForm[] = []
  try {
    const data = localStorage.getItem('forms')
    if (data) {
      forms = JSON.parse(data)
    }
  }
  catch (e) {
    alert(e)
  }
  forms = forms.filter(f => f.id !== props.form.id)

  const confirmDeletion = confirm(`Вы точно хотите удалить эту анкету?`)
  if (confirmDeletion) {
    emit('deleteForm', props.form.id)
    localStorage.setItem('forms', JSON.stringify(forms))
  }
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