import { ResponseStatus } from '../http/ResponseStatus'

export default interface IError {
  status: ResponseStatus
  customCode: number
  message: string
}
