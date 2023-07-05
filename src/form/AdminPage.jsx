import { useState, useEffect } from 'react'
import { useDelete, useGetData } from '../hooks'
import { FormUpdate } from './components/FormUpdate'
import { ModifyOrder } from './components/ModifyOrder'

export const AdminPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedText, setSelectedText] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const { confirm } = useDelete()
  const { getOrders, getInfo } = useGetData()
  const [emptyOrdersMsg, setEmptyOrdersMsg] = useState(false)

  useEffect(() => {
    getOrders()
    setTimeout(() => {
      setEmptyOrdersMsg(true)
    }, 1000)
  }, [])

  const handleFormUpdateData = (data) => {
    if (data) {
      setTimeout(() => {
        setShowModal(false)
      }, 1500)
    }
  }

  const handleClickModal = (event) => {
    const valueId = event.target.innerText
    setSelectedText(valueId)
    setShowModal(true)
    setConfirmDelete(confirm)
    if (confirmDelete) {
      setTimeout(() => {
        setShowModal(false)
      }, 1000)
    }
  }

  const handleCloseModal = (modalClose) => {
    setShowModal(modalClose)
  }

  return (
    <>
      <section className='flex flex-col items-center'>
        {getInfo.length !== 0
          ? (
            <section className='grid justify-center mt-8 lg:mt-32 gap-5 mx-4 mb-36 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:w-auto'>
              {getInfo.map((order) => (
                <section
                  key={order._id}
                  className='flex flex-col items-center justify-between bg-white rounded-md shadow gap-4 w-full text-md py-5 px-5 '
                  id='pedido'
                >
                  <h2 className='flex flex-col justify-center text-center'>
                    <strong>Modificar pedido</strong>
                    <button onClick={handleClickModal} id='modifyOrder' className='border rounded-md bg-stone-300 py-1 px-3 hover:opacity-70'>{order._id}</button>
                  </h2>
                  <table className='flex flex-col w-full'>
                    <tbody>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Producto</td>
                        <td className='p-1 text-lg w-full'>{order.producto}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Nombre</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.nombre}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Dirección</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.direccion}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Sector</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.sector}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Referencia</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.referencia}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Contacto</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.numero}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Estado</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.estadoPago}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Medio</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.medioPago}</td>
                      </tr>
                      <tr className='flex border-b'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Precio</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.precio}</td>
                      </tr>
                      <tr className='flex'>
                        <td className='p-1 text-lg font-bold w-40 flex justify-start'>Fecha</td>
                        <td className='p-1 text-lg w-full flex justify-start'>{order.fecha}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              ))}
              <ModifyOrder showModal={showModal}>
                <FormUpdate selectedText={selectedText} onChildData={handleFormUpdateData} showModal={handleCloseModal} />
              </ModifyOrder>
            </section>
            )
          : (
              emptyOrdersMsg &&
                <section className='flex justify-center w-11/12 mt-4 bg-cyan-600 px-8 mx-2 rounded lg:mt-32'>
                  <h1 className='text-2xl text-center text-white w-96 h-auto py-10 px-20 '>No hay pedidos en la base de datos</h1>
                </section>
            )}
      </section>
    </>
  )
}
