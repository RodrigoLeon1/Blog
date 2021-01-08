import react from 'react'
import SidebarLink from '../sidebar-link/SidebarLink'
import './SidebarList.css'

const SidebarList = () => {
  return (
    <ul className='sidebar__list'>
      <li className='mb-4'>
        <SidebarLink icon='fas fa-plus' name='New post' />
      </li>
      <li className='mb-4'>
        <SidebarLink icon='fas fa-book' name='My posts' />
      </li>
      <li className='mb-4'>
        <SidebarLink icon='far fa-user' name='My profile' />
      </li>
      <li className='mb-4'>
        <SidebarLink icon='fas fa-info-circle' name='Info' />
      </li>
      <li className='mb-4'>
        <SidebarLink icon='fas fa-sign-in-alt' name='Login' />
      </li>
      <li className='mb-4'>
        <SidebarLink icon='fas fa-sign-out-alt' name='Logout' />
      </li>
    </ul>
  )
}

export default SidebarList
