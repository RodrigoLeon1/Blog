import react from 'react'
import ITabPaneProps from './ITabPaneProps'
import Card from '../../../card/Card'

const TabPane = ({ name, active }: ITabPaneProps) => {
  return (
    <div
      className={`tab-pane fade show ${active ? 'active' : ''}`}
      id={`${name}`}
      role='tabpanel'
      aria-labelledby={`${name}_tab`}
    >
      <Card
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'
        name='imageName'
        title='How to use pointers in C++'
        author='Rodrigo Leon'
        likes={100}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae architecto, debitis, odio voluptatibus deserunt fuga voluptate facilis ad quod labore, alias incidunt veniam non? Quibusdam numquam deserunt fugit exercitationem.'
        href=''
        textBtn='View more'
      />
    </div>
  )
}

export default TabPane
