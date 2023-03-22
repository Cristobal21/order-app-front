import { useState } from 'react'
import { useSendData } from './useSendData'

export const useForm = (initialForm, validateForm) => {
  const { sending } = useSendData()

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(1)
  // const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  // 1 = empty
  // 2 = true
  // 3 = false
  const handleSubmit = (e) => {
    e.preventDefault(e)
    setErrors(validateForm(form))
    if (Object.keys(errors).length === 0) {
      if (form !== initialForm) {
        sending(form)
        setLoading(2)
        setForm(initialForm)
        setTimeout(() => {
          setLoading(1)
        }, 2000)
      }
    } else {
      setLoading(3)
      setTimeout(() => {
        setLoading(1)
      }, 3000)
      console.log('Error al agregar un nuevo pedido')
    }
  }

  return {
    form,
    errors,
    loading,
    // response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
