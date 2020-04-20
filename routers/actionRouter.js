const express = require('express')
const router = express.Router()
const action = require('../data/helpers/actionModel')

//id (number)
//project_id (number)(required)
//description (string)(required, 128 char)
//notes (string) (required)
// completed (boolean)

router.get("/", (req,res) => {
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
module.exports = router 