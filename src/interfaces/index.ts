import * as HTTPServer from 'http'
import socketIO from 'socket.io'
import http from 'interfaces/express'
import socket from 'interfaces/socket.io'

const server: HTTPServer.Server = HTTPServer.createServer(http)
const socketIO: socketIO.Server = socket(server)

server.listen(process.env.PORT)

process.stdout.write(`Interfaces on PORT => ${process.env.PORT}\n`)

//AWS LOAD BALANCE FIX
server.keepAliveTimeout = 61 * 1000
server.headersTimeout = 65 * 1000

export { http, socketIO }
