const express = require('express')
const router = express.Router()
const action = require('../data/helpers/actionModel')

//id (number)
//project_id (number)(required)
//description (string)(required, 128 char)
//notes (string) (required)
// completed (boolean)

router.get("/", (req,res) => { //get actions
    action.get()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "no actions available"
            })
        })
})

router.get("/:id", (req,res) => { //get spec action
    action.get(req.params.id)
        .then(act => {
            if (act) {
                res.status(200).json(act)
            } else {
                res.status(404).json({
                    message: "no action at this id"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "error retrieving action"
            })
        })
})

router.post("/", (req,res) => { //adds a new action
    if(!req.body.project_id || !req.body.description || !req.body.notes) {
        return res.status(400).json({
            message: "make sure the project id is selected, description and notes filled out"
        })
    }

    action.insert(req.body)
        .then(newAct => {
            res.status(201).json(newAct)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "there was an error saving the new action"
            })
        })
})
module.exports = router 