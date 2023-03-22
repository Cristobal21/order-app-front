import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <aside className='flex flex-col items-center w-full py-4 gap-y-4 px-4'>
      <Link to='/' className='text-center py-2 w-full bg-indigo-500 rounded-md text-lg text-white shadow-md hover:focus:outline-none hover:bg-indigo-400 focus:bg-indigo-600 hover:cursor-pointer sm:text-md md:text-lg active:scale-95'>Agregar Pedido</Link>
      <Link to='admin' className='text-center py-2 w-full bg-indigo-500 rounded-md text-lg text-white shadow-md hover:focus:outline-none hover:bg-indigo-400 focus:bg-indigo-600 hover:cursor-pointer sm:text-md md:text-lg active:scale-95'>Ver Pedidos</Link>
    </aside>
  )
}
