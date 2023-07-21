import { useState } from 'react'
import { useForm } from '../hooks/useForm'

//* VALIDACIONES */
const options = {
  timeZone: 'America/Santiago',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

const initialForm = {
  // activo: false,
  producto: '',
  nombre: '',
  direccion: '',
  sector: '',
  referencia: '',
  numero: '',
  estadoPago: '',
  precio: '',
  medioPago: '',
  fecha: new Date(Date.now()).toLocaleString('es-CL', options)
}

const validationsForm = (form) => {
  const errors = {}

  const regexProduct = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9-&-,.\s]{1,500}$/
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexAddress = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9-.\s]+$/g
  const regexReference = /^.{1,255}$/
  const regexContact = /^[0-9]{0,9}$/

  if (!form.producto.trim()) {
    errors.producto = 'El campo "Producto" es requerido'
  } else if (!regexProduct.test(form.producto.trim())) {
    errors.producto =
      'El campo "Producto" solo acepta letras, números, punto, coma y espacios en blanco.'
  } else if (!form.nombre.trim()) {
    errors.nombre = 'El campo "Nombre" es requerido'
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = 'El campo "Nombre" solo acepta letras y espacios en blanco.'
  } else if (!form.direccion.trim()) {
    errors.direccion = 'El campo "Dirección" es requerido'
  } else if (!regexAddress.test(form.direccion.trim())) {
    errors.direccion =
      'El campo "Dirección solo acepta letras, números y espacios en blanco."'
  } else if (!form.referencia.trim()) {
    errors.referencia = 'El campo "Referencia lugar" es requerido'
  } else if (!regexReference.test(form.referencia.trim())) {
    errors.referencia =
      'El campo "Referencia" no debe exceder los 255 caracteres.'
  } else if (!form.numero.trim()) {
    errors.numero = 'El campo "Número Contacto" es requerido'
  } else if (!regexContact.test(form.numero.trim())) {
    errors.numero =
      'El campo "Número contacto" solo admite números y un largo máximo de 9 números.'
  }

  return errors
}

export const RegisterOrder = () => {
  const [pago, setPago] = useState(true)

  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm)

  const handleClickPagar = () => {
    setPago(false)
  }
  const handleClickPagado = () => {
    setPago(true)
  }

  let load
  if (loading === 2) {
    load = <p className='shadow mt-5 border-green-400 border text-xl text-center rounded bg-green-400 py-3 px-4 text-white w-full'>Agregado con éxito</p>
  } else if (loading === 3) {
    load = <p className='shadow mt-5 border-red-400 border text-xl text-center rounded bg-red-400 py-3 px-4 text-white w-full'>Error en el Formulario</p>
  }

  return (
    <section className='flex flex-col w-96 mx-3 mt-6 lg:mt-36 mb-36'>
      <form onSubmit={handleSubmit} className='w-full'>
        <section className='block bg-white px-4 py-4 rounded-md'>
          <textarea
            cols='30'
            rows='2'
            name='producto'
            id='producto'
            placeholder='Producto (obligatorio)'
            className={`border border-slate-300 ${errors.producto ? 'border-red-500' : 'border-slate-300'} mt-2 block w-full px-3 py-2 bg-white border rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500`}
            value={form.producto}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.producto && <p className='text-sm text-red-500'>{errors.producto}</p>}
          <input
            type='text'
            name='nombre'
            id='nombre'
            placeholder='Nombre (obligatorio)'
            className={`border border-slate-300 ${errors.nombre ? 'border-red-500' : 'border-slate-300'} mt-2 block w-full px-3 py-2 bg-white border rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500`}
            value={form.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.nombre && <p className='text-sm text-red-500'>{errors.nombre}</p>}
          <input
            type='text'
            name='direccion'
            id='direccion'
            placeholder='Dirección (obligatorio)'
            className={`border border-slate-300 ${errors.direccion ? 'border-red-500' : 'border-slate-300'} mt-2 block w-full px-3 py-2 bg-white border rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500`}
            value={form.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.direccion && <p className='text-sm text-red-500'>{errors.direccion}</p>}
          <select
            name='sector'
            className='mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500 hover:cursor-pointer'
            onChange={handleChange}
            defaultValue=''
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
            rows='4'
            placeholder='Referencia lugar (obligatorio)'
            className={`border border-slate-300 ${errors.referencia ? 'border-red-500' : 'border-slate-300'} mt-2 block w-full px-3 py-2 bg-white border rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500`}
            value={form.referencia}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.referencia && <p className='text-sm text-red-500'>{errors.referencia}</p>}
          <input
            type='text'
            name='numero'
            id='numero'
            placeholder='Número contacto (obligatorio)'
            className={`border border-slate-300 ${errors.numero ? 'border-red-500' : 'border-slate-300'} mt-2 block w-full px-3 py-2 bg-white border rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500`}
            value={form.numero}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.numero && <p className='break-words text-sm text-red-500'>{errors.numero}</p>}
          {pago && <></>}
          {/* <select
            name='estado'
            className='mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500 hover:cursor-pointer'
            onChange={handleChange}
            defaultValue=''
          >
            <option value=''>-- Estado Pago --</option>
            <option value='por pagar' onClick={handleClickPagar}>Por pagar</option>
            <option value='pagado' onClick={handleClickPagado}>Pagado</option>
          </select> */}
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
                placeholder='Precio'
                value={form.precio}
                onChange={handleChange}
                className='mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
              />
              <select
                name='medioPago'
                className='mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500'
                defaultValue=''
                onChange={handleChange}
              >
                <option value=''>-- Medio de pago --</option>
                <option value='efectivo'>Efectivo</option>
                <option value='tarjeta'>Tarjeta</option>
                <option value='transferencia'>Transferencia</option>
              </select>
            </>
          )}
          {loading === 1 && <input
            type='submit'
            value='Agregar'
            className='bg-cyan-600 border border-cyan-500 active:scale-95 focus:outline-none text-xl py-3 mt-5 w-full rounded shadow-md hover:opacity-90 text-white hover:cursor-pointer'
                            />}
          {loading === 2 && load}
          {loading === 3 && load}
        </section>
      </form>
    </section>
  )
}
