import React, { useState } from 'react'
import { AiOutlinePrinter, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import '../styles/btnFormUpdate.css'

export const ButtonsActions = ({ handleModalUpdate, handleDelete, handlePrint }) => {
  const [hoverEdit, setHoverEdit] = useState(false)
  const [hoverDelete, setHoverDelete] = useState(false)
  const [hoverPrint, setHoverPrint] = useState(false)

  const handleMouseEnterEdit = () => {
    setHoverEdit(true)
  }
  const handleMouseLeaveEdit = () => {
    setHoverEdit(false)
  }

  const handleMouseEnterDelete = () => {
    setHoverDelete(true)
  }
  const handleMouseLeaveDelete = () => {
    setHoverDelete(false)
  }

  const handleMouseEnterPrint = () => {
    setHoverPrint(true)
  }
  const handleMouseLeavePrint = () => {
    setHoverPrint(false)
  }

  return (
    <>
      <button
        className='bg-cyan-600 active:scale-95  focus:outline-none py-6 lg:py-14 w-28 lg:w-40 rounded-lg h-36 lg:h-auto shadow hover:bg-cyan-800 text-white hover:cursor-pointer'
        onClick={handleModalUpdate}
        onMouseEnter={handleMouseEnterEdit}
        onMouseLeave={handleMouseLeaveEdit}
      >
        <section className='flex flex-col items-center m-0'>
          {/* <AiOutlineEdit className='text-4xl' /> */}
          {/* {hoverEdit ? <p className='text-center text-4xl w-48'>Modificar</p> : <AiOutlineEdit className='text-4xl' />} */}
          {hoverEdit ? <AiOutlineEdit className='text-4xl w-auto h-auto' /> : <p className='text-center text-3xl w-full h-auto'>Modificar</p>}
        </section>
      </button>

      <button
        className='bg-cyan-600 active:scale-95  focus:outline-none py-6 lg:py-14 w-28 lg:w-40 rounded-lg h-36 lg:h-auto shadow hover:bg-cyan-800 text-white hover:cursor-pointer'
        onClick={handleDelete}
        onMouseEnter={handleMouseEnterDelete}
        onMouseLeave={handleMouseLeaveDelete}
      >
        <section className='flex flex-col items-center'>
          {hoverDelete ? <AiOutlineDelete className='text-4xl w-auto h-auto' /> : <p className='text-center text-3xl w-full h-auto'>Eliminar</p>}
        </section>
      </button>

      <button
        className='bg-cyan-600 active:scale-95  focus:outline-none py-6 lg:py-14 w-28 lg:w-40 rounded-lg h-36 lg:h-auto shadow hover:bg-cyan-800 text-white hover:cursor-pointer'
        onClick={handlePrint}
        onMouseEnter={handleMouseEnterPrint}
        onMouseLeave={handleMouseLeavePrint}
      >
        <section className='flex flex-col items-center'>
          {hoverPrint ? <AiOutlinePrinter className='text-4xl w-auto h-auto' /> : <p className='text-center text-3xl w-full h-auto'>Imprimir</p>}
        </section>
      </button>
    </>
  )
}
