import { Search } from '../Search/Search'
import style from './HeaderHome.module.css'
import { HeaderLogo } from '../../../../components/Header/HeaderLogo'
import { HeaderLink } from '../../../../components/Header/HeaderLink'

function HeaderHome() {
  return (
    <div className={style.header}>
      <div className={style.headerBlock}>
        <div className={style.headerTop}>
          <HeaderLogo />
          <div className={style.linkHeader}>
            <HeaderLink linkName="Home" />
            <HeaderLink linkName="My library" path="/library" />
          </div>
        </div>
        <Search />
      </div>
    </div>
  )
}

export { HeaderHome }
