import { NavLink } from 'react-router-dom'

function HeaderLink({ path, linkName }) {
  return (
    <div>
      <NavLink to={path ? path : '/'}>{linkName}</NavLink>
    </div>
  )
}

export { HeaderLink }
