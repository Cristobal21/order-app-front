import { useState } from 'react'
import formApi from '../api/formApi'

export const useDelete = (selectedText) => {
  const [message, setMessage] = useState('')
  const [confirm, setConfirm] = useState(false)

  const deleteOrder = () => {
    const url = `/admin/${selectedText}`
    try {
      formApi.delete(url)
        .then(response => {
          console.log(response.data)
          setMessage('Pedido Eliminado')
          setConfirm(true)
        })
        .catch(error => {
          console.log(error)
          setMessage('Error al intentar eliminar')
        })
    } catch (error) {
      console.log(error)
      throw new Error('Error en el servidor', error)
    }
  }
  return {
    deleteOrder,
    message,
    confirm
  }
}
