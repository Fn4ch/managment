<template>
  <div class="main">
    <List :forms="fakeData" />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IForm } from '@/models/types'
import List from './ListOfForms.vue'


const forms = ref<IForm>()

const fakeData: IForm[] = [
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: null,
        birthDate: '2002-08-04',
        description: 'aboboasdasdasdasdasdasdas',
    },
    {
        firstName: 'Питон',
        lastName: 'Питонов',
        middleName: null,
        birthDate: '2002-08-02',
        description: 'aboboasdasdasdasdasdasdas',
  },
    {
        firstName: 'golang',
        lastName: 'плюсович',
        middleName: null,
        birthDate: '2002-02-04',
        description: 'nilnilnilnilnilnilnilnilnilnilnilnilnilnil',
    },
]

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
.main{
  padding: 0 80px;
}
</style>
