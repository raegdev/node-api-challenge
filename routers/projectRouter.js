const express = require('express')
const router = express.Router()
const project = require('../data/helpers/projectModel')

// project
// id (number)
// name (string)
// description (string)
// completed (boolean)

router.get("/", (req,res) => { //get full list of projects
    project.get()
        .then((project) => {
            res.status(200).json(project)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "No projects available"
            })
        })
})

module.exports = router 