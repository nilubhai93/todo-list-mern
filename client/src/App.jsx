import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import About from './pages/About/about'
import TodoList from './pages/Todos/TodoList'

function App() {

  return (
    <div>
      <Routes>
         <Route path='/' element={<Landing/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/todoList' element={<TodoList/>} />
      </Routes>
    </div>
  )
}


export default App

