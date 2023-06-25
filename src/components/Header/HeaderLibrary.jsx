import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { CustomizedSwitches } from '../Switch/Switch'
import Stack from '@mui/material/Stack'
import { ButtonPageLibrary } from '../ButtonHeader/ButtonPageLibrary'

function HeaderLibrary() {
  return (
    <div className={style.header}>
      <div className={style.headerBlock}>
        <div className={style.headerTop}>
          <a href="/">FILMOTEKA</a>
          <div className={style.linkHeader}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/library">My library</NavLink>
          </div>
        </div>
        <div className={style.buttonBlock}>
          <ButtonPageLibrary name="WATCHED" />
          <ButtonPageLibrary name="QUEUE" />
        </div>
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <CustomizedSwitches />
      </Stack>
    </div>
  )
}

export { HeaderLibrary }
