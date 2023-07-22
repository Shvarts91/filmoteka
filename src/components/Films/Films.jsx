import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchFilmById } from '../../api/api'
import { Film } from '../Film/Film'
import { FilmDetails } from '../FilmDetails/FilmDetails'
import style from './Films.module.css'
import { NotFilms } from './NotFilms'

function Films({ onCloseFilmDetails, isLibrary = false }) {
  const dispatch = useDispatch()
  const { films, genres, currentFilm, error, searchQuery, loading } =
    useSelector(({ movies }) => movies)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onCloseModal = () => {
    setIsOpenModal(false)
    if (onCloseFilmDetails) onCloseFilmDetails()
  }
  const onClickCard = async (id) => {
    await dispatch(fetchFilmById(id))
    setIsOpenModal(true)
  }

  return (
    <>
      <div className={style.filmsBody}>
        <div className={style.filmsBlock}>
          {films.map(({ title, id, poster_path, release_date, genre_ids }) => (
            <div className={style.filmsElement} key={id}>
              <Film
                title={title}
                poster_path={poster_path}
                production={release_date}
                genres={genre_ids.map((id) => genres[id])}
                id={id}
                onCardOpen={onClickCard}
              />
            </div>
          ))}
          {!films.length && searchQuery && 'No any films by your search query'}
        </div>
        {error && <div className={style.error}>{error}</div>}
        {!films.length && isLibrary && !loading && <NotFilms />}
      </div>
      {currentFilm.id && (
        <FilmDetails
          currentFilm={currentFilm}
          open={isOpenModal}
          onClose={onCloseModal}
        />
      )}
    </>
  )
}

export { Films }
