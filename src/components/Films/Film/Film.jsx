import style from './Film.module.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

function Film({ title, backdrop_path, prodaction, genres, id }) {
  const pathImage = 'https://www.themoviedb.org/t/p/w500'

  const getYear = () => new Date(prodaction).getFullYear()

  return (
    <Card sx={{ height: '100%' }} className={style.filmCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${pathImage}${backdrop_path}`}
          alt="image film"
        />
        <CardContent>
          <Typography
            fontWeight={700}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {genres.slice(0, 3).join(', ')} / <span>{getYear()}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // <div className={style.filmCard}>
    //   <div className={style.picture}>
    //     <img
    //       className={style.image}
    //       src={`${pathImage}${backdrop_path}`}
    //       alt=""
    //     />
    //   </div>

    //   <h3>{title}</h3>
    //   <span>{getYear()}</span>
    //   {genres.slice(0, 3).join(', ')}
    // </div>
  )
}

export { Film }
