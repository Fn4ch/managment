<template>
  <div
    class="controllers"
  >
    <div class="controllers__input">
      <span>ФИО</span>
      <div class="controllers__input-field">
        <input
          type="text"
          v-model="fio"
        >
        <button @click="fio = ''">
          Очистить
        </button>
      </div>
      <div
        v-if="!fioError"
        class="controllers__input_error"
      >
        Введите ФИО в формате: Иванов Иван Иванович
      </div>
    </div>
    <div class="controllers__input">
      <span>Дата рождения</span>
      <div class="controllers__input-field">
        <input
          type="text"
          v-model="birthDate"
          @input="validateBirthDate"
        >
        <button @click="birthDate = ''">
          Очистить
        </button>
      </div>
      <div
        v-if="!birthError"
        class="controllers__input_error"
      >
        Заполните дату в формате dd-mm-yyyy
      </div>
    </div>
    <div class="controllers__input">
      <span>Описание</span>
      <textarea
        type="text"
        v-model="description"
      />
    </div>
    <button
      class="controllers__create"
      @click="isFormExist ? updateForm() : createNewForm()"
    >
      {{ isFormExist ? 'Обновить' : 'Создать' }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { IForm } from '@/models/types'
import router from '@/router'
import useFormStore from '@/stores/formStore'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'


// const props = defineProps({
//   id: {type: String},
//   firstName: {type: String},
//   lastName: {type: String},
//   middleName: {type: String},
//   birthDate: {type: String},
//   description: {type: String},
// })

const { formState } = storeToRefs(useFormStore())

const fio = ref<string>(`${formState.value.lastName} ${formState.value.firstName} ${formState.value.middleName ?? ''}`)
const birthDate = ref<string>(formState.value.birthDate)
const description = ref<string>(formState.value.description ?? '')

const fioRegex = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s?[а-яА-ЯёЁa-zA-Z]*$/
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-([0-9]{4})$/

const isFormExist = computed(() => {
    let forms : IForm[] = []
    const data = localStorage.getItem('forms')
    if (data) {
      forms = JSON.parse(data)
  }
    return forms.some(f => f.id === formState.value.id)
})

const validateBirthDate = () => {
  if (!birthDate.value) {
    return
  }
  const cleanDate = birthDate.value.replace(/[^\d]/g, "")
  let mask = ''
  const day = cleanDate.slice(0, 2)
  if (day) {
    mask += day
    if(day.length === 2) mask += '-'
  }
  const month = cleanDate.slice(2, 4)
  if (month) {
    mask += month
    if(month.length === 2) mask += '-'
  }
  const year = cleanDate.slice(4, 8)
  mask += year
  birthDate.value = mask
}

const fioError = computed(() => {
  if (fio.value) {
    return fioRegex.test(fio.value.trimStart().trimEnd())
  }
  return false
})

const birthError = computed(() => {
  if (birthDate.value) {

    return dateRegex.test(birthDate.value.trimStart().trimEnd())
  }
  return false
})

const createNewForm = () => {
  if (!fioError.value) {
    alert('Введите ФИО в формате: Иванов Иван Иванович')
    return
  }
  if (!birthDate.value) {
    alert('Заполните дату в формате dd-mm-yyyy')
    return
  }
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
  const [lastName, firstName, middleName] = fio.value.trimStart().trimEnd().split(' ')
  console.log(middleName)
  forms.push({ id: Date.now().toString() , lastName, firstName, middleName, birthDate: birthDate.value, description: description.value })

  console.log(forms)
  localStorage.setItem('forms', JSON.stringify(forms))
  router.push('/')
}

const updateForm = async () => {
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
  const [ lastName, firstName, middleName ] = fio.value.trimStart().trimEnd().split(' ')
  const updatingForm = forms.findIndex(f => f.id === formState.value.id)
  
  forms[updatingForm] = {
    id: formState.value.id,
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    description: description.value,
    birthDate: birthDate.value
  }

  await localStorage.setItem('forms', JSON.stringify(forms))
  router.push('/')
}



</script>

<style lang="scss" scoped>
.controllers{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  input, textarea{
    border: 1px solid rgba($colorBlack, $alpha: 0.2);
    padding: 8px 16px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    margin-right: 16px;
    width: max-content;
    box-shadow: 4px 8px 16px rgba($colorBlack, $alpha: 0.15);
    width: 320px;
  }
  button{
    width: 104px;
  }
  span{
    color: $colorBlueDark;
    font-size: 24px;
  }
  textarea{
    resize: none;
    width: 464px;
    height: 80px;
  }
  &__input{
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px ;
    margin-bottom: 32px;
    &_error{
      color: $colorSecondary;
    }
  }
  &__input-field{
    display: flex;
    align-items: center;
  }
  &__create{
    color: $colorWhite;
    background-color: $colorBlue;
  }
}
</style>