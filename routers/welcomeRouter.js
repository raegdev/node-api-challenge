const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(201).json({
        message: "Wecome to the Node API Challenge"
    })
})

module.exports = router