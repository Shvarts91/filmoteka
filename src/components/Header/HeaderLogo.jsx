import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export function HeaderLogo() {
  return (
    <NavLink className={style.logo} to="/">
      FILMOTEKA
    </NavLink>
  )
}
