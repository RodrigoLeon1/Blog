import express, { Request, Response } from 'express'
import UserRepository from '../../../database/repository/UserRepository'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  // const users = UserRepository.findAll()
  res.send('Users get endpoint ')
})

router.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('Users post endpoint')
})

router.get('/:id', (req: Request, res: Response) => {
  res.send('Users id get endpoint ')
})

router.put('/:id', (req: Request, res: Response) => {
  res.send('Users put endpoint ')
})

router.delete('/:id', (req: Request, res: Response) => {
  res.send('Users delete endpoint')
})

router.get('/:id/posts', (req: Request, res: Response) => {
  res.send('Users posts get endpoint')
})

export default router
