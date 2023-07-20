import { Films } from '../../components/Films/Films'
import { HeaderHome } from './Components/Header/HeaderHome'
import { Paginaton } from './Components/Pagination/Pagination'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../api/api'

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <>
      <HeaderHome />
      <Films />
      <Paginaton />
    </>
  )
}

export { Home }
