import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminPage } from '../form/AdminPage'
import { RegisterOrder } from '../form/RegisterOrder'
import { OrdersSent } from '../form/OrdersSent'

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<RegisterOrder />} />
      <Route path='admin' element={<AdminPage />} />
      <Route path='adminSent' element={<OrdersSent />} />
      <Route path='/*' element={<Navigate to={<RegisterOrder />} />} />
    </Routes>
  )
}
