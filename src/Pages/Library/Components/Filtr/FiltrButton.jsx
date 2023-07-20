import Button from '@mui/material/Button'
import style from './FiltrLibrary.module.css'

function FiltrButton({ name, onClick, isActive }) {
  return (
    <Button
      className={style.button}
      onClick={() => onClick(name)}
      variant={isActive ? 'contained' : 'outlined'}
    >
      {name}
    </Button>
  )
}

export { FiltrButton }
