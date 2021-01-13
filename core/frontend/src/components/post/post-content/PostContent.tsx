import IPostContentProps from './IPostContentProps'
import './PostContent.css'

const PostContent = ({ content }: IPostContentProps) => {
  return (
    <div className='post__content'>
      <p>{content}</p>
    </div>
  )
}

export default PostContent
