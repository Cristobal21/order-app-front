import formApi from '../api/formApi'

export const useDelete = (selectedText) => {
  const deleteOrder = () => {
    const url = `/admin/${selectedText}`
    try {
      formApi.delete(url)
        .then(response => {
          console.log(response.data)
          window.alert('Se ha eliminado el pedido')
        })
        .catch(error => {
          console.log(error)
          window.alert('Error al momento de eliminar')
        })
    } catch (error) {
      console.log(error)
      throw new Error('Error en el servidor', error)
    }
  }
  return {
    deleteOrder
  }
}
