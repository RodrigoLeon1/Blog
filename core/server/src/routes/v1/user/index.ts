import express, { NextFunction, Request, Response } from 'express'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'
import UserRepository from '../../../database/repository/UserRepository'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const users = await UserRepository.findAll()
  if (users.length === 0) {
    return new ApiResponse(ResponseStatus.NO_CONTENT).send(res)
  }
  return new ApiResponse(ResponseStatus.SUCCESS).send(res, users)
})

router.post('/', async (req: Request, res: Response) => {
  await UserRepository.save({ ...req.body })
  new ApiResponse(ResponseStatus.CREATED).send(res)
})

router.get('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await UserRepository.findById(userId)
  return new ApiResponse(ResponseStatus.SUCCESS).send(res, user)
})

router.put('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  await UserRepository.updateById(userId, { ...req.body })
  return new ApiResponse(ResponseStatus.SUCCESS).send(res)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  await UserRepository.deleteById(userId)
  return new ApiResponse(ResponseStatus.SUCCESS).send(res)
})

//
router.get('/:id/articles', (req: Request, res: Response) => {
  res.send('Users articles get endpoint')
})

router.get('/:id/comments', (req: Request, res: Response) => {
  res.send('Users comments get endpoint')
})

export default router
