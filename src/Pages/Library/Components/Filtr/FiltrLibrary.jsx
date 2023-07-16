import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import Stack from '@mui/material/Stack'

import { fetchFilmListById } from '../../../../api/api'
import { FiltrButton } from './FiltrButton'
import { setFilteredList } from '../../../../store/filmsSlice'

export function FiltrLibrary() {
  const [activeFilter, setActiveFilter] = useState(undefined)

  const dispatch = useDispatch()
  const arrKeyStorage = ['watched', 'queue']
  const [listIdWatched, setListIdWatched] = useLocalStorage('watched', null)
  const [listIdQueue, setListIdQueue] = useLocalStorage('queue', null)

  const handleClick = (keyName) => {
    setActiveFilter(keyName)

    if (keyName === 'watched') {
      dispatch(setFilteredList(keyName))
      return dispatch(fetchFilmListById(listIdWatched))
    }
    if (keyName === 'queue') {
      dispatch(setFilteredList(keyName))
      return dispatch(fetchFilmListById(listIdQueue))
    }
  }

  return (
    <Stack direction={'row'} spacing={2} justifyContent={'center'}>
      {arrKeyStorage.map((filterName) => {
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
