import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  CardMedia,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { MovieListManagerButton } from './MovieListManagerButton'
import style from './FilmDetails.module.css'

export const FilmDetails = ({ open, onClose, currentFilm }) => {
  const {
    title,
    genres,
    poster_path,
    popularity,
    vote_average,
    overview,
    original_title,
    production_companies,
    id,
  } = currentFilm
  const pathImage = 'https://www.themoviedb.org/t/p/w500/'
  const pathImageLogo = 'https://image.tmdb.org/t/p/w500/'

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          maxHeight: 'calc(100vh - 60px)',
        },
      }}
      maxWidth="md"
      open={open}
      onClose={onClose}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 4,
          top: 4,
          color: '#000',
        }}
        data-e2e="close-button"
      >
        <CloseIcon />
      </IconButton>
      <div className={style.modalBlock}>
        <CardMedia
          className={style.image}
          component="img"
          image={`${pathImage}${poster_path}`}
          alt="image film"
        />

        <div className={style.infoBlock}>
          <DialogTitle
            className={style.title}
            fontWeight="700"
            data-e2e="group-name"
          >
            {title}
          </DialogTitle>

          <DialogContent>
            <div className={style.info}>
              <span>Vote </span>
              <span className={style.infoValue}>{vote_average}</span>
            </div>
            <div className={style.info}>
              <span>Popularity </span>
              <span className={style.infoValue}>{popularity}</span>
            </div>
            <div className={style.info}>
              <span>Genre </span>
              <span className={style.infoValue}>
                {genres.map(({ name }) => name).join(', ')}
              </span>
            </div>
            <div className={style.info}>
              <span>Original title</span>
              <span className={style.infoValue}>{original_title}</span>
            </div>
            <div>
              <h3 className={style.aboutTitle}>About</h3>
              <div className={style.aboutDescription}>{overview}</div>
            </div>
            <div className={style.blockButtons}>
              <MovieListManagerButton
                id={id}
                name="WATCHED"
                keyStorage="watched"
              />
              <MovieListManagerButton id={id} name="QUEUE" keyStorage="queue" />
            </div>
            <div className={style.imageLogoBlock}>
              {production_companies.map(({ logo_path, id, name }) => {
                return (
                  <div key={id}>
                    <img
                      className={style.imageLogo}
                      src={`${pathImageLogo}${logo_path}`}
                      alt={name}
                    />
                  </div>
                )
              })}
            </div>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  )
}
