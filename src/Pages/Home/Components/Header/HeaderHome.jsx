import { NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import { Search } from '../Search/Search'
import { CustomizedSwitches } from '../../../../components/Switch/Switch'
import style from './HeaderHome.module.css'

function HeaderHome() {
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
        <Search />
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <CustomizedSwitches />
      </Stack>
    </div>
  )
}

export { HeaderHome }
