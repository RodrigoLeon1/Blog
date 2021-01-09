import react from 'react'
import ICardMetaProps from './ICardMetaProps'
import './CardMeta.css'

const CardMeta = ({ title, author, likes }: ICardMetaProps) => {
  return (
    <>
      <h3 className='customs-cards__title'>{title}</h3>
      <div className='d-flex flex-column align-items-start pb-4'>
        <div>
          <i className='fas fa-user customs-cards__i'></i>
          <span>{author}</span>
        </div>
        <div>
          <i className='fas fa-heart customs-cards__i'></i>
          <span>{likes}</span>
        </div>
      </div>
    </>
  )
}

export default CardMeta
