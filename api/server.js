const express = require("express")

const server = express()

server.use(express.json())

server.use('*', (req,res,next) => {
    next({status: 404, message: "catch all 404 Error!"})
})

server.use((err ,req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
