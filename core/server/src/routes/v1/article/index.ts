import express, { Request, Response } from 'express'
import ArticleRepository from '../../../database/repository/ArticleRepository'
import asyncHandler from '../../../helpers/asyncHandler'
import ApiResponse from '../../../utils/api/http/ApiResponse'
import { ResponseStatus } from '../../../utils/api/http/ResponseStatus'
import { checkAuth } from '../../../middlewares/authMiddleware'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const articles = await ArticleRepository.findAll()
    if (articles.length === 0) {
      return new ApiResponse(ResponseStatus.NO_CONTENT).send(res)
    }
    return new ApiResponse(ResponseStatus.SUCCESS).send(res, articles)
  })
)

router.post(
  '/',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const { user } = req.session
    await ArticleRepository.save({ ...req.body, user })
    new ApiResponse(ResponseStatus.CREATED).send(res)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const articleId = req.params.id
    const article = await ArticleRepository.findById(articleId)
    if (!article)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'Article not found').send(
        res
      )
    return new ApiResponse(ResponseStatus.SUCCESS).send(res, article)
  })
)

router.put(
  '/:id',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    // Check if the request user is the author of the article to edit
    const articleId = req.params.id
    const article = await ArticleRepository.findById(articleId)
    if (!article)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'Article not found').send(
        res
      )
    await ArticleRepository.updateById(articleId, { ...req.body })
    return new ApiResponse(ResponseStatus.SUCCESS).send(res)
  })
)

router.delete(
  '/:id',
  checkAuth,
  asyncHandler(async (req: Request, res: Response) => {
    // Check if the request user is the author of the article to delete
    const articleId = req.params.id
    const article = await ArticleRepository.findById(articleId)
    if (!article)
      throw new ApiResponse(ResponseStatus.NOT_FOUND, 'Article not found').send(
        res
      )
    await ArticleRepository.deleteById(articleId)
    return new ApiResponse(ResponseStatus.SUCCESS).send(res)
  })
)

export default router
