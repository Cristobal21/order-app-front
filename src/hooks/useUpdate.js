import formApi from '../api/formApi'

export const useUpdate = (selectedText) => {
  const url = `/admin/${selectedText}`

  const updateOrder = (form) => {
    try {
      formApi.put(url, form)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
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
