import react from 'react'
import TabLink from './components/tab-link/TabLink'
import TabPane from './components/tab-pane/TabPane'
import './Tab.css'

const Tab = () => {
  return (
    <div>
      <ul className='nav nav-tabs mb-5' id='tabs_filter_posts' role='tablist'>
        <TabLink icon='fas fa-sync' name='Latest' />
        <TabLink icon='far fa-heart' name='Popular' />
      </ul>
      <div className='tab-content' id='tabs_content_posts'>
        <TabPane name='Latest' active={true} />
        <TabPane name='Popular' active={false} />
      </div>
    </div>
  )
}

export default Tab
