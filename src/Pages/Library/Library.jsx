import { fetchFilmListById } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Films } from '../../components/Films/Films'
import { HeaderLibrary } from './Components/Header/HeaderLibrary'
import { TypeList } from '../../constants'

function Library() {
  const { filterQuery } = useSelector(({ movies }) => movies)

  const [listIdWatched] = useLocalStorage(TypeList.WATCHED, null)

  const [listIdQueue] = useLocalStorage(TypeList.QUEUE, null)

  const dispatch = useDispatch()

  const updateFilmsFromStorage = useCallback(() => {
    if (!listIdWatched && !listIdQueue) return

    const dataResult = []
    if (!filterQuery) dataResult.push(...listIdWatched.concat(listIdQueue))

    if (filterQuery === TypeList.WATCHED) dataResult.push(...listIdWatched)

    if (filterQuery === TypeList.QUEUE) dataResult.push(...listIdQueue)

    dispatch(fetchFilmListById([...new Set(dataResult)]))
  }, [dispatch, filterQuery, listIdQueue, listIdWatched])

  useEffect(() => {
    updateFilmsFromStorage()
  }, [updateFilmsFromStorage])

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
