import ICardButtonProps from './ICardButtonProps'
import { NavLink } from 'react-router-dom'
import './CardButton.css'

const CardButton = ({ id, text }: ICardButtonProps) => {
  return (
    <NavLink exact to={`/posts/${id}`} className='customs-cards__btn'>
      {text}
    </NavLink>
  )
}

export default CardButton
