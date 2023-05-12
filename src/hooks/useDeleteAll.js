import formApi from '../api/formApi'

export const useDeleteAll = () => {
  const deleteAll = () => {
    try {
      formApi.delete('/admin')
        .then(response => {
          console.log(response.data)
          setTimeout(() => {
            window.location.reload()
          }, 1800)
        })
        .catch(error => window.alert(`Se produjo un error: ${error}`))
    } catch (error) {
      console.log(error)
    }
  }
  return {
    deleteAll
  }
}
