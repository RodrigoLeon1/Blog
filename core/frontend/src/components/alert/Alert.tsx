import IAlertProps from './IAlertProps'

const Alert = ({ type, msg }: IAlertProps) => {
  return (
    <div className={`alert alert-${type}`} role='alert'>
      {msg}
    </div>
  )
}

export default Alert
