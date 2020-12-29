import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import routes from '../routes/v1/index'

// Loads .env files
dotenv.config()

// Create and export the server instance
export const server = express()
export const port: string = process.env.PORT || '4000'

// Initialized database
mongoose
  .connect(`${process.env.MONGO}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database connection with success')
  })
  .catch((err) => {
    console.log('Error: ', err)
  })

// Parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
server.use(bodyParser.json())

// Api routes
server.use('/', routes)
