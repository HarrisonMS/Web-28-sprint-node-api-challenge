const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel')
const { validatePostMid } = require('../data/helpers/validatePostMid')
const { validatePutMid } = require('../data/helpers/validatePutMid')



//gets all projects
router.get('/', (req, res) => {
  Projects.get().then((projects) => {
    res.status(200).json(projects);
  })
})

// gets project by product_id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Projects.get(id)
  .then(project => {
    project ? 
    res.status(200).send(project) : 
    res.status(404).send(`cant find project at id of ${id}`)
      
  })
  .catch(error => {
      res.status(500).json(error);
  });
});

//gets all actions by project_id
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




// Post a project
router.post('/', validatePostMid, (req, res) => { 
  const newProj = req.body;
  Projects.insert(newProj)
  .then(newProj => {
    newProj ? 
    res.status(200).send(newProj) : 
    res.status(404).send(`cant make this project congrats tho idk how you got to this error message i must know`)  
 })
 .catch(error => {
    res.status(500).json(error);
  })
})

router.put('/:id', validatePutMid, (req, res) => {
  const { id } = req.params;
  const putProj = req.body
  Projects.update(id, putProj)
  .then(project => {
    project ? 
    res.status(201).send(project) : 
    res.status(404).send(`idk`)  
  })
  .catch( error => {
    res.status(500).json({error});
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
  .then(project => {
    res.status(200).json({message: `you just deleted ${project} project hope you finished it`})
  })
  .catch( error => {
    res.status(500).json({error});
  });
})

module.exports = router;