import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDeleteAll, useGetData } from '../hooks'
import { ModalEmptyList } from '../form/components/'

export const Navigation = () => {
  const { getInfo, getOrders } = useGetData()
  const { deleteAll } = useDeleteAll()
  const [clear, setClear] = useState(false)
  const [del, setDel] = useState(false)
  const [borrado, setBorrado] = useState(false)
  const [emptyOrders, setEmptyOrders] = useState(false)
  const [emptyDelete, setEmptyDelete] = useState(false)
  const [diferent, setDiferent] = useState(false)

  useEffect(() => {
    getOrders()
  }, [getInfo])

  // useEffect(() => {
  //   getOrders()
  // }, [getInfo])

  const handleDelete = () => {
    if (Object.keys(getInfo).length === 0) {
      setEmptyOrders(true)
      setTimeout(() => {
        setEmptyOrders(false)
      }, 2000)
    } else {
      setClear(true)
    }
  }
  const handleCancel = () => {
    setClear(false)
    setDel(false)
  }
  const handleConfirm = () => {
    setDel(true)
  }
  const handleEliminate = () => {
    const input = document.querySelector('#delete').value
    if (input.trim() === '') {
      setEmptyDelete(true)
      setTimeout(() => {
        setEmptyDelete(false)
      }, 2000)
    } else if (input.trim() === 'eliminar') {
      deleteAll()
      setBorrado(true)
      setTimeout(() => {
        setClear(false)
        setDel(false)
      }, 2000)
    } else if (input.trim() !== 'eliminar') {
      setDiferent(true)
      setTimeout(() => {
        setDiferent(false)
      }, 2000)
    }
  }
  return (
    <section className='w-full h-auto flex justify-center items-center'>
      <span className='flex justify-center items-center w-full py-4 gap-x-2'>
        <Link to='/' className='h-20 flex items-center justify-center text-center py-4 px-2 w-44 ml-2 bg-cyan-600 rounded text-xl text-white shadow hover:focus:outline-none hover:bg-amber-500 hover:text-slate-800 focus:bg-amber-500 focus:text-slate-800 hover:cursor-pointer sm:text-md md:text-lg active:scale-95'>Agregar Pedido</Link>
        <Link to='admin' className='h-20 flex items-center justify-center text-center py-4 px-2 w-44 mx-1 bg-cyan-600 rounded text-xl text-white shadow hover:focus:outline-none hover:bg-amber-500 hover:text-slate-800 focus:bg-amber-500 focus:text-slate-800 cursor-pointer sm:text-md md:text-lg active:scale-95'>Ver Pedidos</Link>
        <button onClick={handleDelete} className='h-20 flex items-center justify-center py-4 px-2 mr-2 w-44 bg-cyan-600 rounded-md text-xl text-white shadow-md hover:focus:outline-none hover:text-slate-800 hover:bg-amber-500 focus:bg-amber-500 focus:text-slate-800 hover:cursor-pointer sm:text-md md:text-lg active:scale-95'>Limpiar Lista</button>
        {clear
          ? (
              !borrado
                ? (
                  <section className='bg-slate-700 flex flex-col justify-center items-center gap-y-4 py-14 w-auto sm:h-60 mb-96 mx-8 rounded shadow absolute lg:mb-0 lg:mt-96 lg:px-20 lg:h-auto'>
                    <h3 className='text-center lg:text-2xl text-lg text-white w-96 mx-2 break-words'>¿Está completamente segura(o) de eliminar todos los pedidos del día?</h3>
                    <section className='flex justify-center gap-x-4'>
                      <button onClick={handleCancel} className='w-40 py-4 px-8 text-lg text-center text-white rounded-md shadow bg-cyan-600 hover:bg-cyan-500 hover:text-slate-600 active:scale-95'>Cancelar</button>
                      <button onClick={handleConfirm} className='w-40 py-4 px-8 text-lg text-center text-white rounded-md shadow bg-cyan-600 hover:bg-cyan-500 hover:text-slate-600 active:scale-95'>Confirmar</button>
                    </section>
                    {del && (
                      <>
                        <label htmlFor='delete' className='text-center text-white text-md w-96'>Escriba "eliminar" para confirmar la operación</label>
                        <input type='text' name='delete' id='delete' placeholder='Escriba aquí' className='w-60 rounded p-2 focus:outline-slate-400' />
                        {emptyOrders && <p className='text-red-500 break-words text-center w-96'>Campo requerido para eliminar</p>}
                        {emptyDelete
                          ? (
                            <section className='py-3 px-6 w-80 bg-red-300 text-center text-xl text-red-600 rounded'>Campo de texto vacío</section>
                            )
                          : (diferent
                              ? <section className='py-3 px-6 w-96 bg-red-300 text-center text-xl text-red-600 rounded'>Error de escritura, compruebe haber escrito correctamente.</section>
                              : <button onClick={handleEliminate} className='py-3 px-5 w-60 text-lg bg-cyan-600 text-white rounded hover:bg-amber-500 hover:text-slate-600 active:scale-95'>Eliminar Pedidos</button>
                            )}
                      </>
                    )}
                  </section>
                  )
                : <section className='bg-blue-500 w-80 py-8 px-10 mb-96 break-words text-center rounded shadow absolute text-white text-xl lg:text-2xl lg:w-auto lg:mt-96 lg:mb-0 lg:px-32 lg:flex lg:items-center lg:h-40 lg: lg:py-10'>Los pedidos han sido eliminados</section>
            )
          : <></>}
      </span>
      <ModalEmptyList empty={emptyOrders} message='No hay pedidos para eliminar' />
    </section>
  )
}
