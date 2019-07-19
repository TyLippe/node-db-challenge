const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router();

//Get all Projects
router.get('/', async (req, res) => {

})

//Get Project by ID
router.get('/:id', async (req, res) => {

})

//Get all Actions for a Project
router.get('/:id/actions', async (req, res) => {

})

//Add a new Project
router.post('/', async (req, res) => {

})

//Add a new Action to a Project
router.post('/:id/actions', async (req, res) => {

})

//Update a Project
router.put('/:id', async (req, res) => {

})

//Delete a Project
router.delete('/:id', async (req, res) => {

})