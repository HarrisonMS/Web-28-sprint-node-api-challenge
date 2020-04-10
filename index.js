const server = require('./api/server')

const port = process.env.PORT || 5111;

server.listen(port, () => console.log(`sever connected on port ${port}`))