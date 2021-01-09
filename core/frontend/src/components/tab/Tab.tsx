import react from 'react'
import TabLink from './components/tab-link/TabLink'
import TabPane from './components/tab-pane/TabPane'
import ITabProps from './ITabProps'
import './Tab.css'

const Tab = ({
  primaryTab,
  primaryArticles,
  secondaryTab,
  secondaryArticles,
}: ITabProps) => {
  return (
    <div>
      <ul className='nav nav-tabs mb-5' id='tabs_filter_posts' role='tablist'>
        <TabLink icon='fas fa-list-ul' name={primaryTab} active={true} />
        <TabLink icon='far fa-heart' name={secondaryTab} active={false} />
      </ul>
      <div className='tab-content' id='tabs_content_posts'>
        <TabPane name={primaryTab} active={true} />
        <TabPane name={secondaryTab} active={false} />
      </div>
    </div>
  )
}

export default Tab
