import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Http } from '../utils/enum/http/Http'
import { ILoginData } from '../utils/interfaces/form/ILoginData'
import AppTitle from '../components/app-title/AppTitle'
import Alert from '../components/alert/Alert'
import { AlertType } from '../components/alert/AlertType'
import Loading from '../components/loading/Loading'
import jwt from 'jwt-decode'

const LoginPage = () => {
  const history = useHistory()
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState(false)
  const [errorsFetch, setErrorsFetch] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { register, handleSubmit, errors } = useForm<ILoginData>()

  const onSubmit = ({ email, password }: ILoginData, e: any) => {
    setIsLoading(true)

    const init = {
      method: Http.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    }

    fetch(`${process.env.REACT_APP_LOCAL_ENDPOINT}/auth/login`, init)
      .then((response) => response.json())
      .then((object) => {
        if (object.status >= 400 && object.status <= 500) {
          setError(true)
          setErrorsFetch(object.message)
        } else {
          if (object.data.token) {
            localStorage.setItem('user', JSON.stringify(object.data))
          }

          console.log(object.data.token)
          console.log(jwt(object.data.token))

          setSuccess(true)
          history.push({
            pathname: '/',
          })
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <AppTitle title='Login' />
      {error && !success && <Alert type={AlertType.DANGER} msg={errorsFetch} />}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='mb-5'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            name='email'
            className={`form-control ${errors.email && 'is-invalid'}`}
            ref={register({
              required: true,
            })}
          />
          {errors.email && (
            <div className='invalid-feedback'>Please provide a email.</div>
          )}
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            name='password'
            className={`form-control ${errors.password && 'is-invalid'}`}
            ref={register({
              required: true,
            })}
          />
          {errors.password && (
            <div className='invalid-feedback'>Please provide a password.</div>
          )}
        </div>
        <div className='d-grid gap-2 d-md-flex justify-email-md-end'>
          {isLoading ? (
            <button className='btn btn-primary' type='submit' disabled>
              <Loading customClassName='px-4' />
            </button>
          ) : (
            <button className='btn btn-primary' type='submit'>
              Login
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default LoginPage
