import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { FaFileUpload } from 'react-icons/fa'
import { createMovie, reset } from "../features/movies/movieSlice"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"
const MovieForms = () => {
  const [formData, setFormData] = useState({
    original_language: '',
    original_title: '',
    overview: '',
    release_date: '',
    poster_patch: ''
  })
  const {original_language, original_title, overview, release_date, poster_patch } = formData
  const {movie, isLoading, isError, isSuccess, message } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    dispatch(reset())    
    
  },[isError,message, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {

    e.preventDefault()
    if( (original_language==='') || (original_title==='') || (overview==='') || (release_date==='') || (poster_patch==='') ){
      toast.error('Enter the corresponding info in the empty fields.')
    }else{
      const movieData = {
        original_language, original_title, overview, release_date, poster_patch
      }
      dispatch(createMovie(movieData))
      setFormData(
        {
          original_language: '',
          original_title: '',
          overview: '',
          release_date: '',
          poster_patch: ''
        }
      )
    }
    
  }

  if (isLoading) {
    return <Spinner />
  }

  
  return (
    <>
      <section className='heading'>
        <h4>
            <FaFileUpload /> New Movie
        </h4>
        <p>Please fill the following fields.</p>
      </section>

      <section className="form">
          <form id='MovieForms' onSubmit={onSubmit}>
              <div className="form-group">
                  <input
                      type="text"
                      className='form-control'
                      id='original_language'
                      name='original_language'
                      value={original_language}
                      placeholder='Enter the original language'
                      onChange={onChange}
                  />
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      className='form-control'
                      id='original_title'
                      name='original_title'
                      value={original_title}
                      placeholder='Enter the original title'
                      onChange={onChange}
                  />
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      className='form-control'
                      id='overview'
                      name='overview'
                      value={overview}
                      placeholder='Enter a short description of the movie'
                      onChange={onChange}
                  />
              </div>
              <div className="form-group">
                  <input
                      type="date"
                      className='form-control'
                      id='release_date'
                      name='release_date'
                      value={release_date}
                      placeholder='Enter the release date'
                      onChange={onChange}
                  />
              </div>
              <div className="form-group">
                  <input
                      type="link"
                      className='form-control'
                      id='poster_patch'
                      name='poster_patch'
                      value={poster_patch}
                      placeholder='Enter a movie poster link'
                      onChange={onChange}
                  />
              </div>
              <div className="form-group">
                  <button type="submit" className='btn btn-block'>Submit</button>
              </div>
          </form>
      </section>
    </>
  )
}

export default MovieForms