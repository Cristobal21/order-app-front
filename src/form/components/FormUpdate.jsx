import { useEffect, useState } from 'react'
import { useFormUpdate, useGetDataById } from '../../hooks'
import { useDelete } from '../../hooks/useDelete'

export const FormUpdate = ({ selectedText }) => {
  const [pago, setPago] = useState(true)
  const { getOrder, order } = useGetDataById(selectedText)
  const { deleteOrder } = useDelete(selectedText)

  useEffect(() => {
    getOrder()
  }, [])

  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormUpdate(selectedText)

  const handleClickPagar = () => {
    setPago(false)
  }
  const handleClickPagado = () => {
    setPago(true)
  }

  const handleDelete = (e) => {
    window.prompt('Escriba "eliminar" para confirmar')
    deleteOrder()
  }

  return (
    <>
      <section className='flex flex-col items-center w-auto'>
        <p><strong>Pedido: {`${selectedText}`}</strong></p>
        <form onSubmit={handleSubmit} className='pt-2 pb-0 w-96'>
          <section className='block bg-white px-4 py-4 rounded-md'>
            <textarea
              cols='30'
              rows='2'
              name='producto'
              id='producto'
              placeholder={order.producto}
              className='mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.producto}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='nombre'
              id='nombre'
              placeholder={order.nombre}
              className='mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='direccion'
              id='direccion'
              placeholder={order.direccion}
              className='mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.direccion}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              name='sector'
              className='mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              onChange={handleChange}
            >
              <option value=''>-- Sector / Zona --</option>
              <option value='buin_centro'>Buin centro</option>
              <option value='villaseca'>Villaseca</option>
              <option value='maipo'>Maipo</option>
              <option value='viluco'>Viluco</option>
              <option value='bajo_matte'>Bajos de matte</option>
              <option value='buin_oriente'>Buin oriente</option>
              <option value='alto_jahuel'>Alto jahuel</option>
              <option value='linderos'>Linderos</option>
              <option value='otro'>Otro</option>
            </select>
            <textarea
              name='referencia'
              id='referencia'
              cols='30'
              rows='2'
              placeholder={order.referencia}
              className='mt-2 block rounded-md text-lg w-full px-3 border border-slate-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.referencia}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='numero'
              id='numero'
              placeholder={order.numero}
              className='mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              value={form.numero}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {pago && <></>}
            <input
              type='radio'
              id='porpagar'
              name='estadoPago'
              value='por pagar'
              onChange={handleChange}
              onBlur={handleBlur}
              className='peer/porpagar mr-1'
              onClick={handleClickPagar}
            />
            <label
              htmlFor='porpagar'
              className='peer-checked/porpagar:text-sky-500 mr-4 text-lg'
            >
              Por pagar
            </label>
            <input
              type='radio'
              id='pagado'
              name='estadoPago'
              value='pagado'
              onChange={handleChange}
              onBlur={handleBlur}
              className='peer/pagado mr-1 mt-3'
              onClick={handleClickPagado}
            />
            <label
              htmlFor='pagado'
              className='peer-checked/pagado:text-sky-500 text-lg'
            >
              Pagado
            </label>
            {!pago && (
              <>
                <input
                  type='text'
                  name='precio'
                  id='precio'
                  placeholder={order.precio}
                  value={form.precio}
                  onChange={handleChange}
                  className='mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
                />
                <select
                  name='medioPago'
                  className='mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
                  onChange={handleChange}
                >
                  <option value=''>-- Medio de pago --</option>
                  <option value='efectivo'>Efectivo</option>
                  <option value='tarjeta'>Tarjeta</option>
                  <option value='transferencia'>Transferencia</option>
                </select>
              </>
            )}
            <section className='flex justify-center space-x-3'>
              <input
                type='submit'
                value='Modificar'
                className='bg-indigo-500 border border-indigo-500 active:scale-95 focus:outline-none text-xl py-3 mt-5 w-full rounded shadow-md hover:opacity-90 focus:bg-indigo-600 text-white hover:cursor-pointer'
              />
              <input
                type='button'
                value='Eliminar'
                className='bg-red-500 border border-red-500 active:scale-95 focus:outline-none text-xl py-3 mt-5 w-full rounded shadow-md hover:opacity-90 focus:bg-red-600 text-white hover:cursor-pointer'
                onClick={handleDelete}
              />
            </section>
          </section>
        </form>
        {/* {loading && <p className='text-lg text-center rounded bg-green-400 py-3 px-4 text-white w-80'>Modificado con éxito</p>} */}
      </section>
    </>
  )
}
