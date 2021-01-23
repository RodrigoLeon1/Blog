import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IFormData } from '../utils/interfaces/form/IFormData'
import { Http } from '../utils/enum/http/Http'
import AppTitle from '../components/app-title/AppTitle'
import Loading from '../components/loading/Loading'
import Alert from '../components/alert/Alert'
import { AlertType } from '../components/alert/AlertType'

const NewPostPage = () => {
  const history = useHistory()
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [successPost, setSuccessPost] = useState<boolean>(false)
  const { register, handleSubmit, errors } = useForm<IFormData>()

  const onSubmit = ({ name, content, image }: IFormData, e: any) => {
    setIsLoading(true)

    fetch(`${process.env.REACT_APP_LOCAL_ENDPOINT}/articles`, {
      method: Http.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        content: content,
        user: '60037871a2fed62a6ca25fd1', // Hardcoded just for testing
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error posting data')
        setSuccessPost(true)
        e.target.reset()
        setTimeout(() => {
          history.push({
            pathname: '/',
          })
        }, 2000)
      })
      .catch((err) => setError(true))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <AppTitle title='New post' />
      {error && <Alert type={AlertType.DANGER} msg='Error with API.' />}
      {successPost ? (
        <Alert type={AlertType.SUCCESS} msg='Post created with success.' />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <div className='mb-5'>
            <label htmlFor='title' className='form-label'>
              Article title
            </label>
            <input
              name='name'
              className={`form-control ${errors.name && 'is-invalid'}`}
              ref={register({
                required: true,
                max: 150,
              })}
            />
            {errors.name && (
              <div className='invalid-feedback'>Please provide a title.</div>
            )}
          </div>
          <div className='mb-5'>
            <label htmlFor='content' className='form-label'>
              Article content
            </label>
            <textarea
              name='content'
              className={`form-control ${errors.content && 'is-invalid'}`}
              rows={8}
              ref={register({
                required: true,
              })}
            />
            {errors.content && (
              <div className='invalid-feedback'>Please provide a content.</div>
            )}
          </div>
          <div className='mb-5'>
            <label htmlFor='formFile' className='form-label'>
              Article's image
            </label>
            <input
              name='image'
              className='form-control'
              type='file'
              ref={register}
            />
          </div>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            {isLoading ? (
              <button className='btn btn-primary' type='submit' disabled>
                <Loading customClassName='px-4' />
              </button>
            ) : (
              <button className='btn btn-primary' type='submit'>
                New post
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default NewPostPage
