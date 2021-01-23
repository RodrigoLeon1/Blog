import useFetch from '../hooks/useFetch'
import { Http } from '../utils/enum/http/Http'
import IPost from '../utils/interfaces/post/IPost'
import AppTitle from '../components/app-title/AppTitle'
import Tab from '../components/tab/Tab'

const HomePage = () => {
  const { data: latestPost } = useFetch<IPost[]>(`articles/`, Http.GET)
  const { data: popularPosts } = useFetch<IPost[]>(`articles/`, Http.GET) // articles/popular -> Endpoint not defined yet

  return (
    <>
      <AppTitle title='Welcome to BlogApp!' />
      <Tab
        primaryTab='Latest'
        primaryArticles={latestPost}
        secondaryTab='Popular'
        secondaryArticles={popularPosts}
      />
    </>
  )
}

export default HomePage
