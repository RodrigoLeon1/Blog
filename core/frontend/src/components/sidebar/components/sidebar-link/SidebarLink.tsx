import react from 'react'
import ISidebarLinkProps from './ISidebarLinkProps'
import './SidebarLink.css'

const SidebarLink = ({ icon, name }: ISidebarLinkProps) => {
  return (
    <a href='#' className='sidebar__link'>
      <i className={icon}></i>
      {name}
    </a>
  )
}

export default SidebarLink
