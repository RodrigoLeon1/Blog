import express, { Request, Response } from 'express'
import ArticleRepository from '../../../database/repository/ArticleRepository'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const articles = await ArticleRepository.findAll()
  if (articles.length === 0) {
    return new ApiResponse(ResponseStatus.NO_CONTENT).send(res)
  }
  return new ApiResponse(ResponseStatus.SUCCESS).send(res, articles)
})

router.post('/', async (req: Request, res: Response) => {
  await ArticleRepository.save({ ...req.body })
  new ApiResponse(ResponseStatus.CREATED).send(res)
})

router.get('/:id', async (req: Request, res: Response) => {
  const articleId = req.params.id
  const article = await ArticleRepository.findById(articleId)
  return new ApiResponse(ResponseStatus.SUCCESS).send(res, article)
})

router.put('/:id', async (req: Request, res: Response) => {
  const articleId = req.params.id
  await ArticleRepository.updateById(articleId, { ...req.body })
  return new ApiResponse(ResponseStatus.SUCCESS).send(res)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const articleId = req.params.id
  await ArticleRepository.deleteById(articleId)
  return new ApiResponse(ResponseStatus.SUCCESS).send(res)
})

export default router
