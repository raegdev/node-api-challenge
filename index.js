const express = require('express')
const server = express()
const port = 3000

//Routers
const welcomeRouter = require('./routers/welcomeRouter')
const projectRouter = require('./routers/projectRouter')
const actionRouter = require('./routers/actionRouter')

server.use(express.json())
server.use('/', welcomeRouter)
server.use("/api/projects", projectRouter)
server.use('/api/actions', actionRouter)

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
