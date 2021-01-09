import react from 'react'
import ICardDescriptionProps from './ICardDescriptionProps'
import './CardDescription.css'

const CardDescription = ({ description }: ICardDescriptionProps) => {
  return <p className='customs-cards__description'>{description}</p>
}

export default CardDescription
