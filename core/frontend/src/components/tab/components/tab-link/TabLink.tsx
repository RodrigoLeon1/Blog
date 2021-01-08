import react from 'react'
import ITabLinkProps from './ITabLinkProps'
import './TabLink.css'

const TabLink = ({ icon, name }: ITabLinkProps) => {
  return (
    <li className='nav-item' role='presentation'>
      <a
        className='nav-link'
        id={`${name}_tab`}
        data-bs-toggle='tab'
        href={`#${name}`}
        role='tab'
        aria-controls={`${name}`}
        aria-selected='true'
      >
        <i className={icon}></i>
        {name}
      </a>
    </li>
  )
}

export default TabLink