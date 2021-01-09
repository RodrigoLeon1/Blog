import react from 'react'
import AppTitle from '../components/app-title/AppTitle'
import Tab from '../components/tab/Tab'

const HomePage = () => {
  // Get 'latests' and 'popular' posts
  return (
    <>
      <AppTitle title='Welcome to BlogApp!' />
      <Tab
        primaryTab='Latest'
        primaryArticles={{}}
        secondaryTab='Popular'
        secondaryArticles={{}}
      />
    </>
  )
}

export default HomePage
