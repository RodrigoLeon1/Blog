import ISidebarLinkProps from './ISidebarLinkProps'
import { NavLink } from 'react-router-dom'
import './SidebarLink.css'

const SidebarLink = ({ path, icon, name }: ISidebarLinkProps) => {
  return (
    <NavLink
      exact
      to={`/${path}`}
      className='sidebar__link'
      activeClassName='sidebar__link--active'
    >
      <i className={icon}></i>
      {name}
    </NavLink>
  )
}

export default SidebarLink
