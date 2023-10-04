import { useDispatch } from "react-redux"
import movieService from "../features/movies/movieService"

const MovieItem = ({movie}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <h3>{movie.original_title}</h3>
    </div>
  )
}

export default MovieItem