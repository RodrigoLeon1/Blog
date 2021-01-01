import express, { Request, Response } from 'express'
import ArticleRepository from '../../../database/repository/ArticleRepository'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const articles = await ArticleRepository.findAll()
  res.send({ status: 'OK', data: articles })
})

export default router
