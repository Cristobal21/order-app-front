import { useState } from 'react'
import formApi from '../api/formApi'

export const useGetDataById = (selectedText) => {
  const [order, setOrder] = useState([])

  const getOrder = async () => {
    try {
      const { data } = await formApi.get(`/admin/${selectedText}`)
      const { pedido } = data
      setOrder(pedido)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getOrder,
    order
  }
}
