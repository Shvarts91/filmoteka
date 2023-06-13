import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchGenres, fetchMovies } from '../api/Api'
import { Film } from './Film/Film'
import style from './Films.module.css'

function Films() {
  const dispatch = useDispatch()
  const { films, genres } = useSelector(({ movies }) => movies)

  useEffect(() => {
    dispatch(fetchMovies())
    dispatch(fetchGenres())
  }, [])

  return (
    <div className={style.filmsBody}>
      <div className={style.filmsBlock}>
        {films.map(({ title, id, backdrop_path, release_date, genre_ids }) => (
          <div className={style.filmsElement} key={id}>
            <Film
              title={title}
              backdrop_path={backdrop_path}
              prodaction={release_date}
              genres={genre_ids.map((id) => genres[id])}
              id={id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { Films }
