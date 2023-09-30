import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/register' element= {<Register/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App