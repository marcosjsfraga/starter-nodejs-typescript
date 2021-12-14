import http from 'http'
import SocketIO from 'socket.io'

export default (server: http.Server): SocketIO.Server => SocketIO(server)
process.stdout.write(`Loaded => socket.io\n`)
