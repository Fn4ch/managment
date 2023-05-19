<template>
  <div
    class="controllers"
  >
    <div class="controllers__input">
      <span>ФИО</span>
      <div>
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
      <div>
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
  </div>
  <button @click="createNewForm">
    Создать
  </button>
</template>

<script lang="ts" setup>
import { IForm } from '@/models/types'
import { ref, computed} from 'vue'


const props = withDefaults(defineProps<IForm>(), {
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    description: ''
})

const fio = ref<string>(`${props.lastName} ${props.firstName} ${props.middleName ?? ''}`)
const birthDate = ref<string>(props.birthDate)
const description = ref<string>(props.description ?? '')

const fioRegex = /^[\p{L} ]{1,}(?:,[\p{L} ]{1,}){1,2}$/u
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-([0-9]{4})$/

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
    return fioRegex.test(fio.value)
  }
  return false
})

const birthError = computed(() => {
  if (birthDate.value) {
    return dateRegex.test(birthDate.value)
  }
  return false
})

const createNewForm = () => {
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
  forms.push({ id: Date.now() , lastName, firstName, middleName, birthDate: birthDate.value, description: description.value })

  localStorage.setItem('forms', JSON.stringify(forms))
}



</script>

<style lang="scss" scoped>
.controllers{
  input, textarea{
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 16px;
    width: max-content;
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
    height: 80px;
    width: 100%;
  }
  &__input{
    width: 600px;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px ;
    margin-bottom: 32px;
    &_error{
      color: $colorSecondary;
      font-weight: 500;
    }
  }
}
</style>