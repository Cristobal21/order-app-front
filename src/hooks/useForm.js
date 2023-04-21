import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSendData } from './useSendData'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const { sending } = useSendData()
  const [loading, setLoading] = useState(1)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
    setErrors(validateForm(form))
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
        }, 1000)
        setTimeout(() => {
          navigate('/admin')
        }, 1000)
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
    handleChange,
    handleBlur,
    handleSubmit
  }
}
