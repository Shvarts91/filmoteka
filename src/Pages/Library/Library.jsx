import { fetchFilmListById } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { Films } from '../../components/Films/Films'
import { HeaderLibrary } from './Components/Header/HeaderLibrary'

function Library() {
  const keyStorageWatched = 'watched'
  const keyStorageQueue = 'queue'

  const { filterQuery } = useSelector(({ movies }) => movies)

  const [listIdWatched, setListIdWatched] = useLocalStorage(
    keyStorageWatched,
    null
  )
  console.log(filterQuery)
  const [listIdQueue, setListIdQueue] = useLocalStorage(keyStorageQueue, null)

  const updateFilmsFromStorage = () => {
    const dataResult = []

    if (!filterQuery) dataResult.push(...listIdWatched.concat(listIdQueue))

    if (filterQuery === keyStorageWatched) dataResult.push(...listIdWatched)

    if (filterQuery === keyStorageQueue) dataResult.push(...listIdQueue)

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
