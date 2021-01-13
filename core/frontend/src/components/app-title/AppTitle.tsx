import IAppTitleProps from './IAppTitleProps'

const AppTitle = ({ title }: IAppTitleProps) => {
  return (
    <div className='mb-5'>
      <h3>
        <span className='color-primary'>_</span>
        {title}
      </h3>
    </div>
  )
}

export default AppTitle
