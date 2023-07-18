import { Search } from '../Search/Search'
import style from './HeaderHome.module.css'
import { NavLink } from 'react-router-dom'
import { NavigationLinks } from '../../../../components/NavigationLinks/NavigationLinks'

function HeaderHome() {
  return (
    <div className={style.header}>
      <div className={style.headerBlock}>
        <div className={style.headerTop}>
          <NavLink className={style.logo} to="/">
            FILMOTEKA
          </NavLink>
          <NavigationLinks />
          {/* <div className={style.linkHeader}>
            <HeaderLink linkName="Home" />
            <HeaderLink linkName="My library" path="/library" />
          </div> */}
        </div>
        <Search />
      </div>
    </div>
  )
}

export { HeaderHome }
