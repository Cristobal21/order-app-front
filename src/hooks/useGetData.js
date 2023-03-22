import { useState } from 'react'
import formApi from '../api/formApi'

export const useGetData = () => {
  const [getInfo, setGetInfo] = useState([])

  const getOrders = async () => { // Para listar todos los pedidos
    try {
      const { data } = await formApi.get('/admin')
      const { pedidos } = data
      const pedidosOrdenados = pedidos.reverse()
      setGetInfo(pedidosOrdenados)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getOrders,
    getInfo
  }
}
