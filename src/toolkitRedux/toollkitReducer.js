import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  todoFilms: [
    {
      id: 1,
      title: 'Fast',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 2,
      title: 'Fast2',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 3,
      title: 'Fast3',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 4,
      title: 'Fast4',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 1,
      title: 'Fast',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 2,
      title: 'Fast2',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 3,
      title: 'Fast3',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 4,
      title: 'Fast4',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 1,
      title: 'Fast',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 2,
      title: 'Fast2',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 3,
      title: 'Fast3',
      discription: 'cool film, created 20 may 2004',
    },
    {
      id: 4,
      title: 'Fast4',
      discription: 'cool film, created 20 may 2004',
    },
  ],
  pageSize: 9,
  currentPage: 1,
  discriptionForFilm: {
    title: '',
    createYear: '',
    duration: '',
    actors: '',
  },
  //   isFetching: false,
  //   followingProgress: [],
  //   totalItemsCount: 0,
}

export const setFilms = createAction('SET_FILMS')

export const searchFilms = createAction('SEARCH_FILMS')

export const descriptionFilm = createAction('DESCRIPTION_FILM')

export default createReducer(initialState, (builder) => {
  builder.addCase(
    setFilms,
    (state, action) => {
      state.todoFilms = setFilms
    },
    searchFilms,
    (state, action) => {
      state.todoFilms.title = searchFilms
    },
    descriptionFilm,
    (state, action) => {
      state.descriptionFilm = descriptionFilm
    }
  )
})
