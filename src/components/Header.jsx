import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand">Oura Movies</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    {user? (
                    <>
                      {user.admin?(
                        <>
                          <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to={'/forms'}>MovieForms</Link>
                          </li>
                        </>
                      ):(
                        <div></div>
                        )
                      }
                      <li className="nav-item">
                        <button className='nav-link' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                      </li>
                    </>
                    ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={'/register'}>Register</Link>
                      </li>
                    </>
                    )}
                </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Header