import express, { Request, Response } from 'express'
import TagRepository from '../../../database/repository/TagRepository'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const tags = await TagRepository.findAll()
  if (tags.length === 0) {
    return new ApiResponse(ResponseStatus.NO_CONTENT).send(res)
  }
  return new ApiResponse(ResponseStatus.SUCCESS).send(res, tags)
})

router.post('/', async (req: Request, res: Response) => {
  await TagRepository.save({ ...req.body })
  new ApiResponse(ResponseStatus.CREATED).send(res)
})

export default router
