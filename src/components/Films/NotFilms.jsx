import { LinkButton } from './LinkButton'
import style from './Films.module.css'

function NotFilms() {
  return (
    <>
      <div className={style.titleNotFilms}>Ooops...</div>
      <div className={style.textNotFilms}>
        'No movies have been added yet. Let`s go pick something to your liking'
      </div>
      <div className={style.buttonNotFilms}>
        <LinkButton to="/" children="go to home" variant="outlined" />
      </div>
    </>
  )
}

export { NotFilms }
