import express, { Request, Response } from 'express'
import CommentRepository from '../../../database/repository/CommentRepository'
import asyncHandler from '../../../helpers/asyncHandler'
import { checkAuth } from '../../../middlewares/authMiddleware'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'

const router = express.Router()

router.post(
  '/',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    await CommentRepository.save({ ...req.body })
    new ApiResponse(ResponseStatus.CREATED).send(res)
  })
)

router.put(
  '/:id',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const commentId = req.params.id
    const comment = await CommentRepository.findById(commentId)
    if (!comment)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'Comment not found').send(
        res
      )
    await CommentRepository.updateById(commentId, { ...req.body })
    return new ApiResponse(ResponseStatus.SUCCESS).send(res)
  })
)

router.delete(
  '/:id',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const commentId = req.params.id
    const comment = await CommentRepository.findById(commentId)
    if (!comment)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'Comment not found').send(
        res
      )
    await CommentRepository.deleteById(commentId)
    return new ApiResponse(ResponseStatus.SUCCESS).send(res)
  })
)

export default router
