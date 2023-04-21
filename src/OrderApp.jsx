import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'
// import { NavbarTitle } from './ui/NavbarTitle'
import { Navigation } from './ui/Navigation'

export const OrderApp = () => {
  return (
    <BrowserRouter>
      <section className='flex flex-col w-full h-screen justify-between'>
        <section className='bg-slate-800 flex justify-center w-full fixed bottom-0 h-28 py-2 lg:top-0'>
          <Navigation />
        </section>
        <section className='flex w-full justify-center items-center'>
          <RouterApp />
        </section>
      </section>
    </BrowserRouter>
  )
}
