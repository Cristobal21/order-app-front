import { ButtonsModalDelete } from './ButtonsModalDelete'

export const ModalDelete = ({ order, selectedText, handleCancel, handleConfirmDelete }) => {
  return (
    <section className='flex flex-col justify-center items-center px-8 lg:w-auto mx-2 bg-slate-600 pt-10 pb-1 rounded absolute top-0 h-full sm:w-full'>
      <section className='flex flex-col justify-center w-auto text-white'>
        <p className='text-xl text-center'>¿Está segura(o) de eliminar el siguiente pedido?.</p>
        <p className='mt-4 text-center'>{`Id Pedido - ${selectedText}`}</p>
        <section className='flex justify-center w-auto'>
          <table className='my-8 w-full text-justify'>
            <tbody>
              <tr className='border-b'>
                <td className='p-2 border-r'>Producto</td>
                <td className='p-2 text-justify'>{order.producto}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Nombre</td>
                <td className='p-2 text-justify'>{order.nombre}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2  border-r'>Dirección</td>
                <td className='p-2 text-justify'>{order.direccion}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Sector</td>
                <td className='p-2 text-justify'>{order.sector}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Referencia</td>
                <td className='p-2 text-justify'>{order.referencia}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Contacto</td>
                <td className='p-2 text-justify'>{order.numero}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Estado</td>
                <td className='p-2 text-justify'>{order.estadoPago}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Medio</td>
                <td className='p-2 text-justify'>{order.medioPago}</td>
              </tr>
              <tr className='border-b'>
                <td className='p-2 border-r'>Precio</td>
                <td className='p-2 text-justify'>{order.precio}</td>
              </tr>
              <tr className=''>
                <td className='p-2 border-r'>Fecha</td>
                <td className='p-2 text-justify'>{order.fecha}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
      <ButtonsModalDelete handleCancel={handleCancel} handleConfirmDelete={handleConfirmDelete} />
    </section>
  )
}
