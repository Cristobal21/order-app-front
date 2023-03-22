import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminPage } from '../form/AdminPage'
import { RegisterOrder } from '../form/RegisterOrder'

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<RegisterOrder />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/*' element={<Navigate to={<RegisterOrder />} />} />
    </Routes>
  )
}
