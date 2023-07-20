import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import style from './Film.module.css'

function Film({ title, poster_path, production, genres, id, onCardOpen }) {
  const pathImage = 'https://image.tmdb.org/t/p/w500'
  const getYear = () => new Date(production).getFullYear()

  const handleClick = () => {
    onCardOpen(id)
  }

  return (
    <Card sx={{ height: '100%' }} className={style.filmCard}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={`${pathImage}${poster_path}`}
          alt="image film"
          className={style.image}
        />
        <CardContent>
          <Typography
            fontWeight={700}
            gutterBottom
            // variant="h5"
            component="div"
            className={style.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className={style.genre}
            color="text.secondary"
          >
            {genres.slice(0, 3).join(', ')} / <span>{getYear()}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { Film }
