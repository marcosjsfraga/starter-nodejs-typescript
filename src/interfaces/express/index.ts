import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
//  {%- if cookiecutter.use_sentry == "y" %}
//  import * as Sentry from '@sentry/node'
//  {%- endif %}

const application: express.Application = express()

// {% if cookiecutter.use_sentry == "y" %}
//  // SENTRY - init before all middlewares
//  Sentry.init({ dsn: process.env.SENTRY_DSN })
//  application.use(Sentry.Handlers.requestHandler())
//  {% endif %}
// MIDDLEWARES

application.use(cors())
application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())

process.stdout.write(`Loaded => express\n`)

export default application
