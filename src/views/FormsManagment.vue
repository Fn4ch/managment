<template>
  <div class="managment">
    <div class="managment__header">
      <span>Управление анкетами</span>
      <button @click="openCreateForm">
        Добавить
      </button>
    </div>
    <ListOfForms
      :forms="forms"
      @delete-form="handleDeleteForm"
    />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IForm } from '@/models/types'
import ListOfForms from '@/components/ListOfForms.vue'
import router from '@/router'
import { storeToRefs } from 'pinia'
import useFormStore from '@/stores/formStore'


const forms = ref<IForm[]>([])

function handleDeleteForm(id: string) {
  console.log(id)
  const val = forms.value.filter(f => f.id !== id)
  forms.value =val
}


const openCreateForm = () => {
  const { formState } = storeToRefs(useFormStore())
  formState.value = {
    id: '',
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    description: '',
  }
  router.push('form-actions')
}

// const fakeData: IForm[] = [
//     {
//         firstName: 'Иван',
//         lastName: 'Иванов',
//         middleName: null,
//         birthDate: '2002-08-04',
//         description: 'aboboasdasdasdasdasdasdas',
//     },
//     {
//         firstName: 'Питон',
//         lastName: 'Питонов',
//         middleName: null,
//         birthDate: '2002-08-02',
//         description: 'aboboasdasdasdasdasdasdas',
//   },
//     {
//         firstName: 'golang',
//         lastName: 'плюсович',
//         middleName: null,
//         birthDate: '2002-02-04',
//         description: 'nilnilnilnilnilnilnilnilnilnilnilnilnilnil',
//     },
// ]

onMounted(() => {
    try {
        const data = localStorage.getItem('forms')
        if (data) {
            forms.value = JSON.parse(data)
        }
    }
    catch (e) {
        alert(e)
    }
})

</script>

<style scoped lang="scss">
.managment{
  width: 1280px;
  margin: 0 auto;

  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    
    button{
      background-color: $colorBlue;
      color: $colorWhite;
    }
  }
}
</style>
