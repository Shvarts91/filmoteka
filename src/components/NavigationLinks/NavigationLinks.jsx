import { NavLink } from 'react-router-dom'
import style from './NavigationLinks.module.css'

function NavigationLinks() {
  return (
    <div className={style.linkHeader}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/library">My library</NavLink>
    </div>
  )
}

export { NavigationLinks }
