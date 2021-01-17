import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Http } from '../utils/enum/http/Http'
import { ILoginData } from '../utils/interfaces/form/ILoginData'
import AppTitle from '../components/app-title/AppTitle'
import Alert from '../components/alert/Alert'
import { AlertType } from '../components/alert/AlertType'
import Loading from '../components/loading/Loading'

const LoginPage = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successLogin, setSuccessLogin] = useState(false)
  const { register, handleSubmit, errors } = useForm<ILoginData>()

  const onSubmit = ({ email, password }: ILoginData, e: any) => {
    setIsLoading(true)

    fetch(`${process.env.REACT_APP_LOCAL_ENDPOINT}/login`, {
      method: Http.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error with login')
        setSuccessLogin(true)
        e.target.reset()
      })
      .catch((err) => setError(true))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <AppTitle title='Login' />
      {error && <Alert type={AlertType.DANGER} msg='Error with API.' />}
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
          <label htmlFor='formFile' className='form-label'>
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
