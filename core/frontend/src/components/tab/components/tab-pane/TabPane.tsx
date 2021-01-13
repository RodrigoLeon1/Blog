import ITabPaneProps from './ITabPaneProps'
import Card from '../../../card/Card'

const TabPane = ({ name, articles, active }: ITabPaneProps) => {
  return (
    <div
      className={`tab-pane fade show ${active ? 'active' : ''}`}
      id={`${name}`}
      role='tabpanel'
      aria-labelledby={`${name}_tab`}
    >
      {articles ? (
        articles.map((article) => (
          <Card
            id={article._id}
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'
            name={article.name}
            title={article.name}
            author={article.user.name}
            likes={article.likes}
            description={article.content.substr(0, 350)}
            href={`/posts/${article._id}`}
            textBtn='View more'
            key={article._id}
          />
        ))
      ) : (
        <p className='text-center'>Empty list.</p>
      )}
    </div>
  )
}

export default TabPane
