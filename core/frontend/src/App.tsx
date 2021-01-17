import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NewPostPage from './pages/NewPostPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <Router>
      <div className='row'>
        <Sidebar />
        <div className='col-10'>
          <div className='container py-5'>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/posts'>
                <NewPostPage />
              </Route>
              <Route path='/posts/:id'>
                <PostPage />
              </Route>
              <Route exact path='/register'>
                <RegisterPage />
              </Route>
              <Route exact path='/login'>
                <LoginPage />
              </Route>
              <Route path='*'>404 page</Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
