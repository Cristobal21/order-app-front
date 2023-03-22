import { useState } from 'react'
import { useUpdate } from './useUpdate'

export const useFormUpdate = (selectedText) => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)

  const { updateOrder } = useUpdate(selectedText)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    if (Object.keys(form).length === 0) {
      window.alert('No has escrito nada para modificar')
    } else {
      updateOrder(form)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  return {
    form,
    loading,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
