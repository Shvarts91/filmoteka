import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchFilmById, fetchGenres, fetchMovies } from '../../api/Api'
import { Film } from './Film/Film'
import style from './Films.module.css'
import { FilmModal } from './Film/ModalWindow/Modal'

function Films() {
  const dispatch = useDispatch()
  const { films, genres, currentFilm, error } = useSelector(
    ({ movies }) => movies
  )
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onCloseModal = () => {
    setIsOpenModal(false)
  }
  const onClickCard = async (id) => {
    await dispatch(fetchFilmById(id))
    setIsOpenModal(true)
  }

  useEffect(() => {
    dispatch(fetchMovies())
    dispatch(fetchGenres())
  }, [])
  console.log(error)
  return (
    <>
      <div className={style.filmsBody}>
        <div className={style.filmsBlock}>
          {films ? (
            films.map(({ title, id, poster_path, release_date, genre_ids }) => (
              <div className={style.filmsElement} key={id}>
                <Film
                  title={title}
                  poster_path={poster_path}
                  prodaction={release_date}
                  genres={genre_ids.map((id) => genres[id])}
                  id={id}
                  onCardOpen={onClickCard}
                />
              </div>
            ))
          ) : (
            <div className={style.error}>{error}</div>
          )}
        </div>
      </div>
      {currentFilm.id && (
        <FilmModal
          currentFilm={currentFilm}
          open={isOpenModal}
          onClose={onCloseModal}
        />
      )}
    </>
  )
}

export { Films }
