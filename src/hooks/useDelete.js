import { useState } from 'react'
import formApi from '../api/formApi'
import { useSendData } from './useSendData'
import { useForm } from './useForm'

export const useDelete = (selectedText) => {
  const [confirm, setConfirm] = useState(false)
  const { sending } = useSendData()
  const { form } = useForm()

  const deleteOrder = () => {
    const url = `/admin/${selectedText}`
    try {
      formApi.post(url)
        .then(response => {
          console.log(response.data)
          sending(form)
        })
      formApi.delete(url)
        .then(response => {
          console.log(response.data)
          setConfirm(true)
          setTimeout(() => {
            window.location.reload()
          }, 1800)
        })
        .catch(error => {
          console.log('Ha ocurrido un error al intentar eliminar el pedido')
          throw new Error('Error:', error)
        })
    } catch (error) {
      console.log(error)
      throw new Error('Error en el servidor', error)
    }
  }
  return {
    deleteOrder,
    confirm
  }
}
