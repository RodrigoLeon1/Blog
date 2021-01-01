import express from 'express'
import users from './user'
import articles from './article'

const router = express.Router()

router.use('/api/v1/users', users)
router.use('/api/v1/articles', articles)

export default router
