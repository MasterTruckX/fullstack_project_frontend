import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Header from './components/Header'
import MovieForms from './pages/MovieForms'

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/register' element= {<Register/>}/>
            <Route path='/forms' element={<MovieForms/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
