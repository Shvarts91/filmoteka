import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const LinkButton = ({ to, children, ...rest }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button {...rest}>{children}</Button>
    </Link>
  )
}

export { LinkButton }
