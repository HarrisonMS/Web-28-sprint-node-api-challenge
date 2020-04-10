const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel')
const Actions = require('../data/helpers/actionModel')

router.get('/', (req, res) => {
  Projects.get().then((projects) => {
    res.status(200).json(projects);
  })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  Projects.get(id).then(project => {
    project ? 
    res.status(200).send(project.actions) : 
    res.status(404).send(`could not find any actions for project with id of ${id}`)
  })
  .catch((error) => {
    res.status(500).json(error)
  })
  
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Projects.get(id)
  .then( project => {
    project ? 
    res.status(200).send(project) : 
    res.status(404).send(`cant find project at id of ${id}`)
      
  })
  .catch(error => {

      res.status(500).json(error);
  });
});


module.exports = router;