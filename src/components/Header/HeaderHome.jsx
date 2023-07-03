import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { Search } from '../Search/Search'
import { CustomizedSwitches } from '../Switch/Switch'
import Stack from '@mui/material/Stack'

function HeaderHome() {
  return (
    <div className={style.header}>
      <div className={style.headerBlock}>
        <div className={style.headerTop}>
          <a className={style.logo} href="/">
            FILMOTEKA
          </a>
          <div className={style.linkHeader}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/library">My library</NavLink>
          </div>
        </div>
        <Search />
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <CustomizedSwitches />
      </Stack>
    </div>
  )
}

export { HeaderHome }
