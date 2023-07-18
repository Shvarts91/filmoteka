import { FiltrLibrary } from '../Filtr/FiltrLibrary'
import style from './HeaderLibrary.module.css'
import { HeaderLogo } from '../../../../components/Header/HeaderLogo'
import { HeaderLink } from '../../../../components/Header/HeaderLink'

function HeaderLibrary() {
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
        <div className={style.buttonBlock}>
          <FiltrLibrary />
        </div>
      </div>
    </div>
  )
}

export { HeaderLibrary }
