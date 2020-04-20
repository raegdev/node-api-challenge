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

router.get("/:id", (req,res) => { //gets specific project by id
    project.get(req.params.id)
        .then((projects) => {
            if (projects) {
                res.status(200).json(projects)
            } else {
                res.status(404).json({
                    message: "the project at this id does not exist"
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "error retrieving projects"
            })
        })
})

module.exports = router 