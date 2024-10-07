import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

// pages
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Error from './components/error/Error.jsx';
import Detail from './pages/Detail.jsx';
import Create from './pages/Create.jsx';
import Update from './pages/Update.jsx';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={< Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='*' element={<Error color="danger" error="Page not found" />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
