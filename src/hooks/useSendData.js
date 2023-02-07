import { useState } from 'react'
import formApi from '../api/formApi'

export const useSendData = () => {
  const [getInfo, setGetInfo] = useState([])

  const sending = async ({
    producto,
    rut,
    nombre,
    direccion,
    sector,
    referencia,
    numero,
    estadoPago,
    medioPago,
    precio,
    fecha
  }) => {
    try {
      await formApi.post('/admin', {
        producto,
        rut,
        nombre,
        direccion,
        sector,
        referencia,
        numero,
        estadoPago,
        medioPago,
        precio,
        fecha
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getOrders = async () => {
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
    sending,
    getOrders,
    getInfo,
  }
}
