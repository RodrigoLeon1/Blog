import ICardImageProps from './ICardImageProps'
import './CardImage.css'

const CardImage = ({ src, name }: ICardImageProps) => {
  return <img src={src} alt={name} className='customs-cards__image' />
}

export default CardImage
