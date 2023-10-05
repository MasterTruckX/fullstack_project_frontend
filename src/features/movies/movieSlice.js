import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService'

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// get movies
export const getMovie = createAsyncThunk('movies/get', async (_, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await movieService.getMovie(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//erease movie
export const deleteMovie = createAsyncThunk('movies/delete', async (id,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await movieService.deleteMovie(id,token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = action.payload
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = state.movies.filter((movie)=> movie._id !== action.payload.id)
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = movieSlice.actions
export default movieSlice.reducer