const express = require("express")
const router = express.Router()
const Project = require("../models/projects")


router.get("/", async (req, res, next)=>{
    try {
        const projects = await Project.fetchProjects();
        return res.status(200).json({ projects })
    } catch (err) {
        next(err)
    }
})

module.exports = router