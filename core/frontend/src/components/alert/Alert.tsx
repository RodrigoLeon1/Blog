import IAlertProps from './IAlertProps'

const Alert = ({ type, err }: IAlertProps) => {
  return (
    <div className={`alert alert-${type}`} role='alert'>
      {err}
    </div>
  )
}

export default Alert
