import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Http } from '../utils/enum/http/Http'
import IPost from '../utils/interfaces/post/IPost'
import Post from '../components/post/Post'
import Loading from '../components/loading/Loading'
import Alert from '../components/alert/Alert'
import { AlertType } from '../components/alert/AlertType'
import { DateFormat } from '../helpers/DateFormat'

const PostPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: post, error, isLoading } = useFetch<IPost>(
    `articles/${id}`,
    Http.GET
  )

  return (
    <>
      {error && (
        <Alert
          type={AlertType.DANGER}
          err='Error fetching data from API. Try later!'
        />
      )}
      {isLoading && <Loading customClassName='loading-container' />}
      <div className='custom-container m-auto'>
        {post && (
          <Post
            title={post.name}
            date={DateFormat(post.createdAt)}
            author={post.user.name}
            src='https://screenlane.com/media/screenshots/feedly-web-app-screenshot-5e37f017.jpg'
            alt='t'
            content={post.content}
          />
        )}
      </div>
    </>
  )
}

export default PostPage
