import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'

function ModalButton({ name, id }) {
  const [hasId, setHasId] = useState(false)

  const onClickButton = () => {
    setHasId(!hasId)
    const data = JSON.parse(localStorage.getItem('watched'))
    if (data === null) {
      return localStorage.setItem('watched', JSON.stringify([id]))
    }

    if (!data.includes(id)) {
      data.push(id)
      return localStorage.setItem('watched', JSON.stringify(data))
    }
    const updateData = data.filter((el) => el !== id)
    return localStorage.setItem('watched', JSON.stringify(updateData))
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('watched'))
    if (data.includes(id)) {
      setHasId(true)
    }
  }, [])

  return (
    <div>
      <Button onClick={onClickButton} variant="outlined">
        {!hasId ? `ADD TO ${name}` : `REMOVE FROM ${name}`}
      </Button>
    </div>
  )
}

export { ModalButton }
