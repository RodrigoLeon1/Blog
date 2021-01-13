import IPostImageProps from './IPostImageProps'
import './PostImage.css'

const PostImage = ({ src, alt }: IPostImageProps) => {
  return (
    <>
      <div className='mb-4'>
        <img className='post__image' src={src} alt={alt} />
      </div>
      <div className='d-flex align-items-center justify-content-center mb-5'>
        <i className='fas fa-chevron-down'></i>
      </div>
    </>
  )
}

export default PostImage
