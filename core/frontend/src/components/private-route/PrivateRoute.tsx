import { Route, Redirect } from 'react-router-dom'
import { GetAuthCurrentUser } from '../../helpers/GetAuthCurrentUser'
import IPrivateRouteProps from './IPrivateRouteProps'

const PrivateRoute = ({ path, exact, component }: IPrivateRouteProps) => {
  const isLogged = GetAuthCurrentUser()
  return isLogged ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to='/login' />
  )
}

export default PrivateRoute
