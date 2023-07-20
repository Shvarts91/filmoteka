import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useLocalStorage } from '@uidotdev/usehooks'
import style from './FilmDetails.module.css'

function MovieListManagerButton({ name, id, keyStorage }) {
  const [hasId, setHasId] = useState(false)
  const [listId, setListId] = useLocalStorage(keyStorage, null)

  const onClickButton = () => {
    setHasId(!hasId)

    if (listId === null) return setListId([id])

    if (!listId.includes(id)) return setListId([...listId, id])

    const updateData = listId.filter((el) => el !== id)
    setListId(updateData)
  }

  useEffect(() => {
    if (listId.includes(id)) {
      setHasId(true)
    }
  }, [])

  return (
    <Button
      onClick={onClickButton}
      variant={hasId ? 'contained' : 'outlined'}
      className={style.button}
    >
      {!hasId ? `add to ${name}` : `remove from ${name}`}
    </Button>
  )
}

export { MovieListManagerButton }
