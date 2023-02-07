import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'
import { NavbarTitle } from './ui/NavbarTitle'
import { Navigation } from './ui/Navigation'

export const OrderApp = () => {
  return (
    <BrowserRouter>
      <section className='flex justify-center gap-x-3'>
        <section className='flex flex-col w-96'>
          <section className='w-auto h-20'></section>
          <section className='w-auto bg-white flex justify-center h-96 mt-8 py-10 rounded-md'>
            <Navigation />
          </section>
        </section>
        <section className='w-full flex flex-col items-center'>
          <NavbarTitle/>
          <RouterApp />
        </section>
        {/* <section className='w-72 bg-white'></section> */}
      </section>
    </BrowserRouter>
  )
}
