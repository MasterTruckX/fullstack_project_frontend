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
                <Link className="navbar-brand" to={'/'}>Oura Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    {user? (
                    <>
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
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Header