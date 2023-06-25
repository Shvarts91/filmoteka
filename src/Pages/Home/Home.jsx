import { Films } from '../../components/Films/Films'
import { HeaderHome } from '../../components/Header/HeaderHome'
import { Paginator } from '../../components/Pagination/Pagination'

function Home() {
  return (
    <div>
      <HeaderHome />
      <Films />
      <Paginator />
    </div>
  )
}

export { Home }
