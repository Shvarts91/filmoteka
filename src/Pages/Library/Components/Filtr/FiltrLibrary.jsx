import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import Stack from '@mui/material/Stack'
import { fetchFilmListById } from '../../../../api/api'
import { FiltrButton } from './FiltrButton'
import { setFilteredList } from '../../../../store/filmsSlice'
import { TypeList } from '../../../../constants'

export function FiltrLibrary() {
  const [activeFilter, setActiveFilter] = useState(undefined)
  const dispatch = useDispatch()
  const [listIdWatched, setListIdWatched] = useLocalStorage(
    TypeList.WATCHED,
    null
  )
  const [listIdQueue, setListIdQueue] = useLocalStorage(TypeList.QUEUE, null)

  const handleClick = (keyName) => {
    setActiveFilter(keyName)

    if (keyName === TypeList.WATCHED) {
      dispatch(setFilteredList(keyName))
      return dispatch(fetchFilmListById(listIdWatched))
    }
    if (keyName === TypeList.QUEUE) {
      dispatch(setFilteredList(keyName))
      return dispatch(fetchFilmListById(listIdQueue))
    }
  }

  const keysLocalStorage = Object.values(TypeList)

  return (
    <Stack direction={'row'} spacing={2} justifyContent={'center'}>
      {keysLocalStorage.map((filterName) => {
        return (
          <FiltrButton
            isActive={activeFilter === filterName}
            name={filterName}
            key={filterName}
            onClick={handleClick}
          />
        )
      })}
    </Stack>
  )
}
