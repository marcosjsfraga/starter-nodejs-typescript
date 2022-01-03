import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import { routes, Request, Response, NextFunction } from '../../api/core/routes'
import { AppError } from '../../errors/AppError'

const application = express()

application.use(cors())
application.use(express.json())
application.use(routes)

application.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message })
  }

  return response.status(500).json({
    status: 'error',
    message: `internal server error - ${err.message}`,
  })
})

process.stdout.write(`Loaded => express\n`)

export default application
