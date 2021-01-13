import ILoadingProps from './ILoadingProps'
import './Loading.css'

const Loading = ({ customClassName }: ILoadingProps) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center ${customClassName}`}
    >
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
