import { Request, Response, NextFunction } from 'express'
import ApiResponse from '../utils/api/http/ApiResponse'
import { ResponseStatus } from '../utils/api/http/ResponseStatus'
import jwt from 'jsonwebtoken'

declare global {
  namespace Express {
    export interface Request {
      session: {
        user: string
      }
    }
  }
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers
    if (!authorization) throw new Error('Missing header Authorization')
    const authorizationToken = authorization.split(' ')[1]
    const { userId } = jwt.verify(
      authorizationToken as string,
      process.env.JWT_SECRET!
    ) as any
    req.session = {
      user: userId,
    }
    next()
  } catch (error) {
    new ApiResponse(ResponseStatus.UNAUTHORIZED, error.message).send(res)
  }
}
