import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import CreateRecipe from './pages/CreateRecipe'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/createRecipe' element={<CreateRecipe />}/>
    </Routes>
    </>
  )
}

export default App
