import react from 'react'
import ICardProps from './ICardProps'
import CardButton from './card-button/CardButton'
import CardDescription from './card-description/CardDescription'
import CardImage from './card-image/CardImage'
import CardMeta from './card-meta/CardMeta'
import './Card.css'

const Card = ({
  src,
  name,
  title,
  author,
  likes,
  description,
  href,
  textBtn,
}: ICardProps) => {
  return (
    <article>
      <div className='customs-cards bg-light shadow-sm mb-5'>
        <div className='row'>
          <div className='col d-flex align-items-center '>
            <div className='col-4'>
              <CardImage src={src} name={name} />
            </div>
            <div className='col-8 d-flex flex-column align-items-start px-5'>
              <CardMeta title={title} author={author} likes={likes} />
              <CardDescription description={description} />
              <CardButton href={href} text={textBtn} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
