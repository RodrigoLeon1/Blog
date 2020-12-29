import { port, server } from './config/server'

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
