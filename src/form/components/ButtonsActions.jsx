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
        className='bg-cyan-600 active:scale-95  focus:outline-none py-6 lg:py-14 w-28 lg:w-48 rounded-lg h-36 lg:h-40 shadow hover:bg-cyan-800 text-white hover:cursor-pointer'
        onClick={handleModalUpdate}
        onMouseEnter={handleMouseEnterEdit}
        onMouseLeave={handleMouseLeaveEdit}
      >
        <section className='flex flex-col items-center'>
          <AiOutlineEdit className='text-4xl' />
          {/* {hoverEdit ? <p className='text-center text-4xl w-48'>Modificar</p> : <AiOutlineEdit className='text-4xl' />} */}
        </section>
      </button>

      <button
        className='bg-cyan-600 active:scale-95  focus:outline-none py-6 lg:py-14 w-28 lg:w-48 rounded-lg h-36 lg:h-40 shadow hover:bg-cyan-800 text-white hover:cursor-pointer'
        onClick={handleDelete}
        onMouseEnter={handleMouseEnterDelete}
        onMouseLeave={handleMouseLeaveDelete}
      >
        <section className='flex flex-col items-center'>
          <AiOutlineDelete className='text-4xl' />
          {/* {hoverDelete ? <p className='text-center text-4xl w-48'>Eliminar</p> : <AiOutlineDelete className='text-4xl' />} */}
        </section>
      </button>

      <button
        className='bg-cyan-600 active:scale-95  focus:outline-none py-6 lg:py-14 w-28 lg:w-48 rounded-lg h-36 lg:h-40 shadow hover:bg-cyan-800 text-white hover:cursor-pointer'
        onClick={handlePrint}
        onMouseEnter={handleMouseEnterPrint}
        onMouseLeave={handleMouseLeavePrint}
      >
        <section className='flex flex-col items-center'>
          <AiOutlinePrinter className='text-4xl' />
          {/* {hoverPrint ? <p className='text-center text-4xl w-48'>Imprimir</p> : <AiOutlinePrinter className='text-4xl' />} */}
        </section>
      </button>
    </>
  )
}
