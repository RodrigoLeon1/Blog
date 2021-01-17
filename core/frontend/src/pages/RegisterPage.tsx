import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Http } from '../utils/enum/http/Http'
import { IRegisterData } from '../utils/interfaces/form/IRegisterData'
import AppTitle from '../components/app-title/AppTitle'
import Alert from '../components/alert/Alert'
import { AlertType } from '../components/alert/AlertType'
import Loading from '../components/loading/Loading'

const RegisterPage = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successRegister, setSuccessRegister] = useState(false)
  const { register, handleSubmit, errors } = useForm<IRegisterData>()

  const onSubmit = ({ name, email, password }: IRegisterData, e: any) => {
    setIsLoading(true)

    fetch(`${process.env.REACT_APP_LOCAL_ENDPOINT}/users`, {
      method: Http.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error posting data')
        setSuccessRegister(true)
        e.target.reset()
      })
      .catch((err) => setError(true))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <AppTitle title='Register' />
      {error && <Alert type={AlertType.DANGER} msg='Error with API.' />}
      {successRegister ? (
        <Alert type={AlertType.SUCCESS} msg='Account created with success.' />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <div className='mb-5'>
            <label htmlFor='title' className='form-label'>
              Complete name
            </label>
            <input
              name='name'
              className={`form-control ${errors.name && 'is-invalid'}`}
              ref={register({
                required: true,
                max: 100,
              })}
            />
            {errors.name && (
              <div className='invalid-feedback'>
                Please provide a complete name.
              </div>
            )}
          </div>
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
                Create account
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default RegisterPage
