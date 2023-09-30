import { Link } from 'react-router-dom'
const Header = () => {
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
                    <li className="nav-item">
                    <Link className="nav-link active" to={'/login'}>Login
                        <span className="visually-hidden">(current)</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/register'}>Register</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li> */}
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