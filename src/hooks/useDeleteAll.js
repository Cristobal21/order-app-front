import formApi from '../api/formApi'
import { useGetOrdersSent } from './useGetOrdersSent'
import { useSendData } from './useSendData'

export const useDeleteAll = () => {
  const { sending } = useSendData()
  const { sentOrders } = useGetOrdersSent()

  const deleteAll = () => {
    try {
      formApi.post('/adminSent')
        .then(response => {
          console.log(response.data)
          sending(sentOrders)
        })
      formApi.delete('/adminSent')
        .then(response => {
          console.log(response.data)
          setTimeout(() => {
            window.location.reload()
          }, 1800)
        })
        .catch(error => window.alert(`Se produjo un error al intentar eliminar los pedidos: ${error}`))
    } catch (error) {
      console.log(error)
    }
  }
  return {
    deleteAll
  }
}
