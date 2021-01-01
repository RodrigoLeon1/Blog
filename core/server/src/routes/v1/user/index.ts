import express, { Request, Response } from 'express'
import IUser from '../../../database/model/user/IUser'
import UserRepository from '../../../database/repository/UserRepository'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const users = await UserRepository.findAll()
  res.send({ status: 'OK', data: users })
})

router.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  await UserRepository.save(name, email, password)
  res.send({ status: 'OK', message: 'user created' })
})

router.get('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await UserRepository.findById(userId)
  res.send({ status: 'OK', data: user })
})

router.put('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  await UserRepository.updateById(userId, new IUser({ email: 'em' }))
  res.send({ status: 'OK' })
})

router.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await UserRepository.deleteById(userId)
  res.send({ status: 'OK', data: user })
})

router.get('/:id/articles', (req: Request, res: Response) => {
  res.send('Users articles get endpoint')
})

router.get('/:id/comments', (req: Request, res: Response) => {
  res.send('Users comments get endpoint')
})

export default router
