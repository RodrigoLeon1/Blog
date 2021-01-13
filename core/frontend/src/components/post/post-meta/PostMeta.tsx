import IPostMetaProps from './IPostMetaProps'
import './PostMeta.css'

const PostMeta = ({ title, date, author }: IPostMetaProps) => {
  return (
    <div>
      <h3 className='post__title'>{title}</h3>
      <div className='post__meta mt-3 mb-5'>
        <span className='d-inline-block'>
          <i className='fas fa-calendar-alt'></i> {date}
        </span>
        <span className='d-inline-block'>
          <i className='far fa-user'></i> {author}
        </span>
      </div>
    </div>
  )
}

export default PostMeta
