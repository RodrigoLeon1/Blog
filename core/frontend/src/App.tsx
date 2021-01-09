import react from 'react'
import Sidebar from './components/sidebar/Sidebar'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

const App = () => {
  return (
    <div className='row'>
      <Sidebar />
      <div className='col-10'>
        <div className='container py-5'>
          {/* <HomePage /> */}
          <PostPage />
        </div>
      </div>
    </div>
  )
}

export default App
