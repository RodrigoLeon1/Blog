import express, { NextFunction, Request, Response } from 'express'
import ApiResponse from '../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../utils/api/http/ResponseStatus'
import auth from './auth'
import users from './user'
import articles from './article'
import comments from './comment'
import tags from './tag'

const router = express.Router()

router.use('/api/v1/auth', auth)
router.use('/api/v1/users', users)
router.use('/api/v1/articles', articles)
router.use('/api/v1/comments', comments)
router.use('/api/v1/tags', tags)

// Handler for endpoints not defined
router.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(
    new ApiResponse(
      ResponseStatus.BAD_REQUEST,
      `Endpoint '${req.originalUrl}' not defined`
    ).send(res)
  )
})

export default router
