import { Response } from 'express'
import { ResponseStatus } from './ResponseStatus'

export default class ApiResponse {
  status: ResponseStatus
  message?: string

  constructor(status: ResponseStatus, message?: string) {
    this.status = status
    this.message = message
  }

  public send(res: Response, data?: any): Response {
    return res
      .status(this.status)
      .json({ status: this.status, message: this.message, data })
  }
}
