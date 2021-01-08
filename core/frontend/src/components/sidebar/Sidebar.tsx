import react from 'react'
import SidebarList from './components/sidebar-list/SidebarList'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='col-2 min-vh-100 bg-light sidebar'>
      <div className='container h-100 py-5 d-flex flex-column justify-content-center align-items-center'>
        <SidebarList />
      </div>
    </div>
  )
}

export default Sidebar
