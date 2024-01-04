
import { Routes,Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { BlogDetails } from './pages/BlogDetails'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/blogs/:id' element={<BlogDetails/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  )
}

export default App

const Root = () =>{
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
   
  )
}