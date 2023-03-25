import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import CreateRecipe from './pages/CreateRecipe'
import Home from './pages/Home'
import { ProtectedRoutes } from './protected/ProtectedRoutes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route exact path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/createRecipe' element={<CreateRecipe />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
