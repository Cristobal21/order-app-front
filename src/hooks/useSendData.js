import formApi from '../api/formApi'

export const useSendData = () => { // Para crear nuevo pedido
  const sending = async ({
    activo,
    producto,
    nombre,
    direccion,
    sector,
    referencia,
    numero,
    estadoPago,
    precio,
    medioPago,
    fecha
  }) => {
    try {
      await formApi.post('/admin', {
        activo,
        producto,
        nombre,
        direccion,
        sector,
        referencia,
        numero,
        estadoPago,
        precio,
        medioPago,
        fecha
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    sending
  }
}
