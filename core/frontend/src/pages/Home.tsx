import react from 'react'
import AppTitle from '../components/app-title/AppTitle'
import Sidebar from '../components/sidebar/Sidebar'
import Tab from '../components/tab/Tab'

const Home = () => {
  return (
    <div className='row'>
      <Sidebar />
      <div className='col-10'>
        <div className='container py-5'>
          <AppTitle title='Welcome to BlogApp!' />
          <Tab />
        </div>
      </div>
    </div>
  )
}

export default Home
