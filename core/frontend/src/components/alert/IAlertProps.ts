import { AlertType } from './AlertType'

export default interface IErrorProps {
  type: AlertType
  err: string
}
