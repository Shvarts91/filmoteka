import { FiltrLibrary } from '../Filtr/FiltrLibrary'
import style from './HeaderLibrary.module.css'
import { NavLink } from 'react-router-dom'
import { NavigationLinks } from '../../../../components/NavigationLinks/NavigationLinks'

function HeaderLibrary() {
  return (
    <div className={style.header}>
      <div className={style.headerBlock}>
        <div className={style.headerTop}>
          <NavLink className={style.logo} to="/">
            FILMOTEKA
          </NavLink>
          <NavigationLinks />
        </div>
        <div className={style.buttonBlock}>
          <FiltrLibrary />
        </div>
      </div>
    </div>
  )
}

export { HeaderLibrary }
