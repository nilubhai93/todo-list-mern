import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import About from './pages/About/about'
import TodoList from './pages/Todos/TodoList'
import { Toaster} from "react-hot-toast";
import Home from './pages/Home/Home'


function App() {

  return (
    <div>
      <Routes>
         <Route path='/' element={<Landing/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/todoList' element={<TodoList/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}



export default App

