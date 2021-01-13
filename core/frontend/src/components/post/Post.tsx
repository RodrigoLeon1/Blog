import IPostProps from './IPostProps'
import PostMeta from './post-meta/PostMeta'
import PostImage from './post-image/PostImage'
import PostContent from './post-content/PostContent'

const Post = ({ title, date, author, src, alt, content }: IPostProps) => {
  return (
    <div className='container'>
      {/* Loader on scroll */}
      <div className='scroll-loading'></div>
      <PostMeta title={title} date={date} author={author} />
      <div>
        <PostImage src={src} alt={alt} />
        <PostContent content={content} />
      </div>
    </div>
  )
}

export default Post
