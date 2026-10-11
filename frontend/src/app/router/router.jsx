import { createBrowserRouter } from 'react-router'
import { MainLayout } from '../layouts/MainLayout'
import { homeRoutes } from './routes/homeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...homeRoutes],
  },
])
