import { Request, Response, NextFunction } from 'express'
import ApiResponse from '../utils/api/http/ApiResponse'
import { ResponseStatus } from '../utils/api/http/ResponseStatus'
import jwt from 'jsonwebtoken'

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers
    if (!authorization) throw new Error('Missing header Authorization')
    const authorizationToken = authorization.split(' ')[1]
    jwt.verify(authorizationToken as string, process.env.JWT_SECRET!)
    next()
  } catch (error) {
    new ApiResponse(ResponseStatus.UNAUTHORIZED, error.message).send(res)
  }
}
