import { useState, useEffect } from "react"
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../components/Spinner"
import { getMovie, reset } from "../features/movies/movieSlice"
import MovieItem from "../components/MovieItem"

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state=> state.auth))
  const {movies, isLoading, isError, message} = useSelector((state)=>state.movie)
  const [searchTitle, setSearchTitle] = useState('')
  const filteredTitle = movies.filter(movie => {
    return movie.original_title.toLowerCase().includes(searchTitle.toLowerCase())
  })
  const handleSearch = (event) => {
    setSearchTitle(event.target.value)
  }
  
  useEffect(()=>{
    if(isError){
      console.log(error)
    }

    if(!user){
      navigate('/login')
    }else {
      dispatch(getMovie())
    }
    return ()=>{
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className='home'>
        <form>
          <input className='searchbar' type="search" placeholder="Search" value={searchTitle} onChange={handleSearch}/>
        </form>
        {movies.length > 0 ? (
          <div className='movies'>
            {filteredTitle.map((movie)=>(
              <MovieItem key={movie._id} movie={movie} user={user}/>
            ))}
          </div>
        ) : (
          <h3>No movies to show.</h3>
        )}
      </section>
    </>
  )
}

export default Home