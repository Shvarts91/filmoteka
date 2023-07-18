import { fetchFilmListById } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { Films } from '../../components/Films/Films'
import { HeaderLibrary } from './Components/Header/HeaderLibrary'
import { TypeList } from '../../constants'

function Library() {
  const { filterQuery } = useSelector(({ movies }) => movies)

  const [listIdWatched, setListIdWatched] = useLocalStorage(
    TypeList.WATCHED,
    null
  )

  const [listIdQueue, setListIdQueue] = useLocalStorage(TypeList.QUEUE, null)

  const updateFilmsFromStorage = () => {
    const dataResult = []

    if (!filterQuery) dataResult.push(...listIdWatched.concat(listIdQueue))

    if (filterQuery === TypeList.WATCHED) dataResult.push(...listIdWatched)

    if (filterQuery === TypeList.QUEUE) dataResult.push(...listIdQueue)

    dispatch(fetchFilmListById([...new Set(dataResult)]))
  }

  const dispatch = useDispatch()
  useEffect(() => {
    updateFilmsFromStorage()
  }, [])

  const onCloseFilmDetails = () => {
    updateFilmsFromStorage()
  }

  return (
    <>
      <HeaderLibrary />
      <Films onCloseFilmDetails={onCloseFilmDetails} />
    </>
  )
}

export default Library
