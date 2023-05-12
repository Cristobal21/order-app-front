import { useState } from 'react'
import { useUpdate } from './useUpdate'
import { useNavigate } from 'react-router-dom'

export const useFormUpdate = (selectedText) => {
  const [form, setForm] = useState({})
  const [success, setSuccess] = useState(false)
  const [emptyModal, setEmptyModal] = useState(false)
  const navigate = useNavigate()

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
      setEmptyModal(true)
    } else {
      updateOrder(form)
      setSuccess(true)
      success && navigate('admin', { replace: true })
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
    }
  }

  return {
    form,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
    emptyModal
  }
}
