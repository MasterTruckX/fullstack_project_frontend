import { useEffect } from "react"
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
  
  useEffect(()=>{
    if(isError){
      console.log(error)
    }

    if(!user){
      navigate('/login')
    }else {
      dispatch(getMovie())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className='content'>
        {movies.length > 0 ? (
          <div>
            {movies.map((movie)=>(
              <MovieItem key={movie._id} movie={movie}/>
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