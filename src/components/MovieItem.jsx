import { useDispatch } from "react-redux"
import {deleteMovie} from "../features/movies/movieSlice"

const MovieItem = ({movie , user}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <div>
            <div className="card mb-3" style={{width:'300px'}}>
                <div className="card-header">
                  {user && user.admin?(
                      <>
                        <button className="delete" onClick={()=>dispatch(deleteMovie(movie._id))}>X</button>
                        <h3 className="movie-title">{movie.original_title}</h3>
                      </>
                    ):(
                      <h3 className="movie-title">{movie.original_title}</h3>
                    )
                  }                   
                </div>
                <img className='card-img-top images' src={movie.poster_patch} alt={movie.original_title} />
                <div className="overview">
                    <p>{movie.overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Original Language: {movie.original_language}</li>
                  <li className="list-group-item">Release Date: {new Date(movie.release_date).toLocaleString('en',{year:'numeric', month: 'numeric', day:'numeric'})}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MovieItem