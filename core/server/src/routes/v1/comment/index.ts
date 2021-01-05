import express, { Request, Response } from 'express'
import CommentRepository from '../../../database/repository/CommentRepository'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  await CommentRepository.save({ ...req.body })
  new ApiResponse(ResponseStatus.CREATED).send(res)
})

router.put('/:id', async (req: Request, res: Response) => {
  const commentId = req.params.id
  await CommentRepository.updateById(commentId, { ...req.body })
  return new ApiResponse(ResponseStatus.SUCCESS).send(res)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const commentId = req.params.id
  await CommentRepository.deleteById(commentId)
  return new ApiResponse(ResponseStatus.SUCCESS).send(res)
})

export default router
