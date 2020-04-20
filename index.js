const express = require('express')
const server = express()
const port = 3000

//Routers
const welcomeRouter = require('./routers/welcomeRouter')

server.use(express.json())
server.use('/', welcomeRouter)

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
