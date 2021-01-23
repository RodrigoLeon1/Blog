import SidebarList from './components/sidebar-list/SidebarList'
import { UserContext } from '../../context/UserContext'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='col-2 min-vh-100 bg-light sidebar'>
      <div className='container h-100 py-5 d-flex flex-column justify-content-center align-items-center'>
        <UserContext.Consumer>
          {(value) => <SidebarList user={value} />}
        </UserContext.Consumer>
      </div>
    </div>
  )
}

export default Sidebar
