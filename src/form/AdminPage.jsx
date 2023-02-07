import { useEffect } from 'react'
import { useSendData } from '../hooks/useSendData'

export const AdminPage = () => {
  const { getOrders, getInfo } = useSendData()
  useEffect(() => {
    getOrders()
  }, [])

  return (
    <>
      <main className='grid justify-center gap-3 mt-8 mr-3 mb-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {getInfo.map((order) => (
          <section
            key={order._id}
            className="flex flex-col justify-center items-center bg-white rounded-md shadow gap-2 w-full text-md py-5 px-4 hover:shadow-md"
          >
            <h2><strong>Pedido:</strong> {order._id}</h2>
            <table className='flex flex-col w-full'>
              <tbody>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Producto</td>
                  <td className='border rounded w-full'>{order.producto}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Rut</td>
                  <td className='border rounded w-full flex justify-start'>{order.rut}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Nombre</td>
                  <td className='border rounded w-full flex justify-start'>{order.nombre}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Dirección</td>
                  <td className='border rounded w-full flex justify-start'>{order.direccion}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Sector</td>
                  <td className='border rounded w-full flex justify-start'>{order.sector}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Referencia</td>
                  <td className='border rounded w-full flex justify-start'>{order.referencia}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Contacto</td>
                  <td className='border rounded w-full flex justify-start'>{order.numero}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Estado</td>
                  <td className='border rounded w-full flex justify-start'>{order.estadoPago}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Medio</td>
                  <td className='border rounded w-full flex justify-start'>{order.medioPago}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Precio</td>
                  <td className='border rounded w-full flex justify-start'>{order.precio}</td>
                </tr>
                <tr className='flex'>
                  <td className='font-bold border rounded w-36 flex justify-start'>Fecha</td>
                  <td className='border rounded w-full flex justify-start'>{order.fecha}</td>
                </tr>
              </tbody>
            </table>
            <section className='flex justify-between gap-x-4 w-full'>
              <button className='text-lg w-full rounded-lg py-2 px-4 text-white active:scale-95 hover:opacity-70 active:opacity-100 bg-orange-400'>Modificar</button>
              <button className='text-lg w-full rounded-lg py-2 px-4 text-white active:scale-95 hover:opacity-70 active:opacity-100 bg-green-600'>Imprimir</button>
            </section>
          </section>
      ))}
      </main>
    </>
  )
}
