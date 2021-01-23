import express, { Request, Response } from 'express'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'
import UserRepository from '../../../database/repository/UserRepository'
import asyncHandler from '../../../helpers/asyncHandler'
import { checkAuth } from '../../../middlewares/authMiddleware'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const users = await UserRepository.findAll()
    if (users.length === 0) {
      return new ApiResponse(ResponseStatus.NO_CONTENT).send(res)
    }
    return new ApiResponse(ResponseStatus.SUCCESS).send(res, users)
  })
)

router.post(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const existMail = await UserRepository.findByEmail(req.body.email)
    if (existMail)
      throw new ApiResponse(
        ResponseStatus.BAD_REQUEST,
        'Email must be unique value'
      ).send(res)
    await UserRepository.save({ ...req.body })
    new ApiResponse(ResponseStatus.CREATED).send(res)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const userId = req.params.id
    const user = await UserRepository.findById(userId)
    if (!user)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'User not found').send(
        res
      )
    return new ApiResponse(ResponseStatus.SUCCESS).send(res, user)
  })
)

router.put(
  '/:id',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    // Check if the request user is the same user
    const userId = req.params.id
    const user = await UserRepository.findById(userId)
    if (!user)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'User not found').send(
        res
      )
    await UserRepository.updateById(userId, { ...req.body })
    return new ApiResponse(ResponseStatus.SUCCESS).send(res)
  })
)

router.delete(
  '/:id',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    // Check if the request user is the same user
    const userId = req.params.id
    const user = await UserRepository.findById(userId)
    if (!user)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'User not found').send(
        res
      )
    await UserRepository.deleteById(userId)
    return new ApiResponse(ResponseStatus.SUCCESS).send(res)
  })
)

// checkAuth,
router.get('/:id/articles', (req: Request, res: Response) => {
  res.send('Users articles get endpoint')
})

router.get('/:id/comments', (req: Request, res: Response) => {
  res.send('Users comments get endpoint')
})

export default router
