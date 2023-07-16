import { NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import { CustomizedSwitches } from '../../../../components/Switch/Switch'
import { FiltrLibrary } from '../Filtr/FiltrLibrary'
import style from './HeaderLibrary.module.css'

function HeaderLibrary() {
  return (
    <div className={style.header}>
      <div className={style.headerBlock}>
        <div className={style.headerTop}>
          <NavLink className={style.logo} to="/">
            FILMOTEKA
          </NavLink>
          <div className={style.linkHeader}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/library">My library</NavLink>
          </div>
        </div>
        <div className={style.buttonBlock}>
          <FiltrLibrary />
        </div>
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <CustomizedSwitches />
      </Stack>
    </div>
  )
}

export { HeaderLibrary }
