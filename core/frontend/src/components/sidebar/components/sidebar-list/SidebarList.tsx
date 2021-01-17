import SidebarLink from '../sidebar-link/SidebarLink'
import './SidebarList.css'

const SidebarList = () => {
  return (
    <ul className='sidebar__list'>
      <li className='mb-4'>
        <SidebarLink path='' icon='fas fa-home' name='Home' />
      </li>
      <li className='mb-4'>
        <SidebarLink path='posts' icon='fas fa-plus' name='New post' />
      </li>
      <li className='mb-4'>
        <SidebarLink path='login' icon='fas fa-sign-in-alt' name='Login' />
      </li>
      <li className='mb-4'>
        <SidebarLink path='register' icon='fas fa-user-plus' name='Register' />
      </li>
      {/* <li className='mb-4'>
        <SidebarLink path='post/me' icon='fas fa-book' name='My posts' />
      </li>
      <li className='mb-4'>
        <SidebarLink path='users/me' icon='far fa-user' name='My profile' />
      </li> */}
      {/* <li className='mb-4'>
        <SidebarLink path='' icon='fas fa-info-circle' name='Info' />
      </li>
      <li className='mb-4'>
        <SidebarLink path='' icon='fas fa-sign-out-alt' name='Logout' />
      </li> */}
    </ul>
  )
}

export default SidebarList
