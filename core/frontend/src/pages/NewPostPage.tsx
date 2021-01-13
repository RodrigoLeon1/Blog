import useFetch from '../hooks/useFetch'
import { Http } from '../utils/enum/http/Http'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IFormData } from '../utils/interfaces/form/IFormData'
import AppTitle from '../components/app-title/AppTitle'
import Loading from '../components/loading/Loading'

const NewPostPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, errors } = useForm<IFormData>()

  const onSubmit = ({ title, content, image }: IFormData) => {
    setIsLoading(true)
    console.log(title, content, image)
    // HTTP Request
    // setIsLoading(false)
  }

  return (
    <>
      <AppTitle title='New post' />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='mb-5'>
          <label htmlFor='title' className='form-label'>
            Article title
          </label>
          <input
            name='title'
            className={`form-control ${errors.title && 'is-invalid'}`}
            ref={register({
              required: true,
              max: 150,
            })}
          />
          {errors.title && (
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
    </>
  )
}

export default NewPostPage
