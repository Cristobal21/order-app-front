import { useState } from 'react'
import formApi from '../api/formApi'

export const useGetOrdersSent = () => {
  const [sentOrders, setSentOrders] = useState([])

  const getInfoOrder = async () => { // Para listar todos los pedidos
    // const activo = false
    // const activoString = activo.toString()
    try {
      const { data } = await formApi.get('admin/adminSent')
      const { pedidos } = data
      const pedidosOrdenados = pedidos.reverse()
      setSentOrders(pedidosOrdenados)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getInfoOrder,
    sentOrders
  }
}
