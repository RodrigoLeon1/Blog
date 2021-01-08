import react from 'react'
import ITabPaneProps from './ITabPaneProps'

const TabPane = ({ name, active }: ITabPaneProps) => {
  return (
    <div
      className={`tab-pane fade show ${active ? 'active' : ''}`}
      id={`${name}`}
      role='tabpanel'
      aria-labelledby={`${name}_tab`}
    >
      {/*  */}
    </div>
  )
}

export default TabPane
