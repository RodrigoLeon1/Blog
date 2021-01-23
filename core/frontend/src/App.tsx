import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/private-route/PrivateRoute'
import Sidebar from './components/sidebar/Sidebar'
import { UserContext } from './context/UserContext'
import { GetAuthCurrentUser } from './helpers/GetAuthCurrentUser'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NewPostPage from './pages/NewPostPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  const [logedUser, setLogedUser] = useState({})

  // Testing
  useEffect(() => {
    const user = GetAuthCurrentUser()
    setLogedUser(user)
    // console.log(user)
  }, [])

  return (
    <UserContext.Provider value={logedUser}>
      <Router>
        <div className='row'>
          <Sidebar />
          <div className='col-10'>
            <div className='container py-5'>
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <PrivateRoute path='/posts' component={NewPostPage} exact />
                <PrivateRoute path='/posts/me' component={NewPostPage} exact />
                <PrivateRoute path='/users/me' component={NewPostPage} exact />
                <Route path='/posts/:id'>
                  <PostPage />
                </Route>
                <Route exact path='/register'>
                  <RegisterPage />
                </Route>
                <Route exact path='/login'>
                  <LoginPage />
                </Route>
                <Route exact path='/logout'>
                  <h3>Bye bye</h3>
                </Route>
                <Route path='*'>404 page</Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App
