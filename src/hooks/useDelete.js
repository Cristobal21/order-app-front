import { useState } from 'react'
import formApi from '../api/formApi'

export const useDelete = (selectedText) => {
  const [confirm, setConfirm] = useState(false)

  const deleteOrder = () => {
    const url = `/admin/${selectedText}`
    try {
      formApi.delete(url)
        .then(response => {
          console.log(response.data)
          setConfirm(true)
          setTimeout(() => {
            window.location.reload()
          }, 1800)
        })
        .catch(error => {
          console.log('El pedido no ha sido eliminado')
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
