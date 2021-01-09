import react from 'react'
import ICardButtonProps from './ICardButtonProps'
import './CardButton.css'

const CardButton = ({ href, text }: ICardButtonProps) => {
  return (
    <a href={href} className='customs-cards__btn'>
      {text}
    </a>
  )
}

export default CardButton
