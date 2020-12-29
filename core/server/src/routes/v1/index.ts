import express from 'express'
import user from './user/user'

const router = express.Router()

router.use('/api/v1/users', user)

export default router
