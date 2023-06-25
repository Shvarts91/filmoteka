import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export function ButtonPageLibrary({ name }) {
  return (
    <Stack>
      <Button variant="contained">{name}</Button>
    </Stack>
  )
}
