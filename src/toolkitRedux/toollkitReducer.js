import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    error: null,
    loading: false,
    todoFilms: [],
    pageSize: 9, currentPage: 1, currentFilm: {
        title: '', createYear: '', duration: '', actors: '',
    },
}

export const setFilms = createAction('SET_FILMS')

export const searchFilms = createAction('SEARCH_FILMS')

export const descriptionFilm = createAction('DESCRIPTION_FILM')

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (userId, thunkAPI) => {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=249f222afb1002186f4d88b2b5418b55&page=1')
    const {results} = await response.json();
    return results;
})

const moviesSlice = createSlice({
    name: 'movies', initialState, extraReducers: builder => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.todoFilms = action.payload;
                state.loading = false;
            }).addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default moviesSlice.reducer