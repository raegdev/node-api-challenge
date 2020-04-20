const express = require('express')
const router = express.Router()
const project = require('../data/helpers/projectModel')

// project
// id (number)
// name (string)
// description (string) (required)
// completed (boolean) (required)

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

router.post("/", (req,res) => { //adds a new project
    if(!req.body.name || !req.body.description) {
        return res.status(400).json({
            message: "please put in a project name or project description"
        })
    }

    project.insert(req.body)
        .then((projects) => {
            res.status(201).json(projects)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "there was an error saving this project to the database"
            })
        })
})

router.put("/:id", (req,res) => { //updates an existing project
    project.update(req.params.id, req.body) 
        .then((updatedProj) => {
            res.status(200).json(updatedProj)
        })
        .catch((error) =>{
            console.log(error)
            res.status(500).json({
                message: "unable to edit project"
            })
        })
})

router.delete("/:id", (req,res) => { //delete a project
    project.remove(req.params.id)
        .then(() => {
            res.status(200).end()
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: 'unable to remove project'
            })
        })
    
})

module.exports = router 