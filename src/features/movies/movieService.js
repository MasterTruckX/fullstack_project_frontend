import axios from 'axios'

const API_URL = 'https://tiny-ruby-moth-tux.cyclic.cloud/ouraMovies/movies/'

//create movie
const createMovie = async (movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL,movieData, config)

    return response.data
}

//obtener tareas
const getMovie = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

//borrar tareas
const deleteMovie = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL+id, config)

    return response.data
}

const movieService = {
    getMovie,
    deleteMovie,
    createMovie
}

export default movieService