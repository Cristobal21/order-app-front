import { useEffect, useState } from 'react'
import { useDelete, useFormUpdate, useGetDataById } from '../../hooks'
import { ModalDelete } from './ModalDeleteMsg'
import { ModalDeleteConfirm } from './ModalDeleteConfirm'
import { ModalUpdateMsg } from './ModalUpdateMsg'
import { usePrint } from '../../hooks/usePrint'
import { ButtonsActions } from './ButtonsActions'
// import { useNavigate } from 'react-router-dom'

export const FormUpdate = ({ selectedText, onChildData }) => {
  const { getOrder, order } = useGetDataById(selectedText)
  const { deleteOrder, message } = useDelete(selectedText)
  const { printOrder } = usePrint(selectedText)
  const [modalDel, setModalDel] = useState(false)
  const [modalMessage, setModalMessage] = useState(false)
  const [errorUpdate, setErrorUpdate] = useState(false)
  // const navigate = useNavigate()

  useEffect(() => {
    getOrder()
  }, [])

  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    emptyModal,
    success
  } = useFormUpdate(selectedText)

  const sendDataToParent = () => {
    onChildData(true)
  }

  const handleDelete = (e) => {
    setModalDel(true)
  }

  const handleConfirmDelete = () => {
    deleteOrder()
    setTimeout(() => {
      setModalDel(false)
      setModalMessage(true)
      sendDataToParent()
      setTimeout(() => {
        setModalMessage(false)
      }, 1500)
    }, 800)
  }

  const handleCancel = () => {
    setModalDel(false)
  }

  const handleModalUpdate = () => {
    setErrorUpdate(emptyModal)
    if (emptyModal) {
      setTimeout(() => {
        setErrorUpdate(false)
      }, 1500)
    }
  }

  const handlePrint = () => {
    printOrder()
  }

  return (
    <section className='flex flex-col items-center justify-center w-full h-auto'>
      <p className='text-lg text-center w-auto'><strong>Pedido: {`${selectedText}`}</strong></p>
      <form onSubmit={handleSubmit} className='pt-2 w-full'>
        <section className='flex items-center justify-center gap-x-3 lg:gap-x-6 bg-white py-3 w-full h-full'>
          <section className='flex flex-col lg:justify-center items-center gap-y-2 w-96'>
            <textarea
              cols='30'
              rows='2'
              name='producto'
              id='producto'
              placeholder={order.producto}
              className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.producto}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='nombre'
              id='nombre'
              placeholder={order.nombre}
              className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='direccion'
              id='direccion'
              placeholder={order.direccion}
              className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.direccion}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              name='sector'
              className='text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              onChange={handleChange}
            >
              <option value=''>-- Sector / Zona --</option>
              <option value='buin centro'>Buin centro</option>
              <option value='villaseca'>Villaseca</option>
              <option value='maipo'>Maipo</option>
              <option value='viluco'>Viluco</option>
              <option value='bajo matte'>Bajos de matte</option>
              <option value='buin oriente'>Buin oriente</option>
              <option value='alto jahuel'>Alto jahuel</option>
              <option value='linderos'>Linderos</option>
              <option value='otro'>Otro</option>
            </select>
            <textarea
              name='referencia'
              id='referencia'
              cols='30'
              rows='2'
              placeholder={order.referencia}
              className='block rounded-md text-lg w-full px-3 border border-slate-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.referencia}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              name='estadoPago'
              className='text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              onChange={handleChange}
            >
              <option value=''>-- Estado de Pago --</option>
              <option value='pagado'>Pagado</option>
              <option value='por pagar'>Por pagar</option>
            </select>
            <input
              type='text'
              name='numero'
              id='numero'
              placeholder={order.numero}
              className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.numero}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='precio'
              id='precio'
              placeholder={order.precio}
              value={form.precio}
              onChange={handleChange}
              className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
            />
            <select
              name='medioPago'
              className='text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              onChange={handleChange}
            >
              <option value=''>-- Medio de pago --</option>
              <option value='efectivo'>Efectivo</option>
              <option value='tarjeta'>Tarjeta</option>
              <option value='transferencia'>Transferencia</option>
            </select>
          </section>
          <section className='flex justify-center items-center gap-3 flex-col 6/12 '>
            <ButtonsActions
              handleModalUpdate={handleModalUpdate}
              handleDelete={handleDelete}
              handlePrint={handlePrint}
            />
          </section>
        </section>
      </form>
      {modalDel
        ? (
          <section className='flex flex-col items-center h-auto w-full'>
            <section className='flex flex-col justify-center items-center w-full bg-orange-500'>
              <ModalDelete order={order} selectedText={selectedText} handleCancel={handleCancel} handleConfirmDelete={handleConfirmDelete} />
            </section>
          </section>
          )
        : <></>}
      {modalMessage && <ModalDeleteConfirm message={message} />}
      {errorUpdate && <ModalUpdateMsg message='No hay nada que modificar.' />}
      {success && <ModalUpdateMsg message='Pedido Actualizado' />}
      {/* {success && window.location.reload()} */}
      {/* {success && navigate('/admin', { replace: true })} */}
    </section>
  )
}
