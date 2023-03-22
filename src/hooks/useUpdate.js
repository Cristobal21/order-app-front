import formApi from '../api/formApi'

export const useUpdate = (selectedText) => {
  const url = `/admin/${selectedText}`

  const updateOrder = (form) => {
    console.log(typeof form)
    try {
      formApi.put(url, form)
        .then(response => {
          console.log(response.data)
          window.alert('Se ha actualizado correctamente')
        })
        .catch(error => {
          console.log(error)
          window.alert('Ha ocurrido un error al momento de actualizar')
        })
    } catch (error) {
      console.log(error)
      throw new Error('Error en el servidor', error)
    }
  }
  return {
    updateOrder
  }
}
