import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import CreateRecipe from './pages/CreateRecipe'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Recipe from './pages/Recipe'
import Saved from './pages/Saved'
import { ProtectedRoutes } from './protected/ProtectedRoutes'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Recipe />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/createRecipe' element={<CreateRecipe />} />
          <Route path='/saved' element={<Saved />}/>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
