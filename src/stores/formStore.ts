import { IForm } from '@/models/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useFormStore = defineStore('formStore', () => {
    
    const formState = ref<IForm>({
        id: '',
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
        description: '',
    })

    return { formState }
})

export default useFormStore