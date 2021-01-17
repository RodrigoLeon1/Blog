import express, { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'
import UserRepository from '../../../database/repository/UserRepository'
import asyncHandler from '../../../helpers/asyncHandler'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user = await UserRepository.findByEmail(email)

    if (!user)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'User not found').send(
        res
      )
    const canLogin = await bcrypt.compare(password, user.password)
    if (!canLogin)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'Invalid password').send(
        res
      )

    const EXPIRES_IN = 60 * 60
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: EXPIRES_IN,
      }
    )

    return new ApiResponse(ResponseStatus.SUCCESS).send(res, {
      token,
      EXPIRES_IN,
    })
  })
)

export default router
