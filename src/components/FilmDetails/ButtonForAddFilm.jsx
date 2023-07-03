import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

function ModalButton({ name, id, keyStorage }) {
  const [hasId, setHasId] = useState(false)

  const onClickButton = () => {
    setHasId(!hasId)

    const data = JSON.parse(localStorage.getItem(keyStorage))
    if (data === null) {
      return localStorage.setItem(keyStorage, JSON.stringify([id]))
    }

    if (!data.includes(id)) {
      data.push(id)
      return localStorage.setItem(keyStorage, JSON.stringify(data))
    }
    const updateData = data.filter((el) => el !== id)
    return localStorage.setItem(keyStorage, JSON.stringify(updateData))
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(keyStorage))
    if (data.includes(id)) {
      setHasId(true)
    }
  }, [])

  return (
    <div>
      <Button
        onClick={onClickButton}
        variant={hasId ? 'contained' : 'outlined'}
      >
        {!hasId ? `ADD TO ${name}` : `REMOVE FROM ${name}`}
      </Button>
    </div>
  )
}

export { ModalButton }
