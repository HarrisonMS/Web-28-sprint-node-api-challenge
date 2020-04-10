const express = require('express');
const router = express.Router();
const Actions = require('../data/helpers/actionModel')
const Projects = require('../data/helpers/projectModel')


router.get('/', (req, res) => {
  Actions.get()
    .then( actions => {
      res.status(200).send(actions);
    })
    .catch( err => {
      res.status(500).json({success: false, err});
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  Actions.get(id)
    .then( action => {
      action ? 
      res.status(200).send(action) : 
      res.status(404).send(`cant find action at id of ${id}`)
    })
    .catch(error => {
      res.status(500).json({error});
    });
});

// router.post('/', (req, res) => { 
//   Projects.get(id)
//   .then(project = {
//     project ? project
//   })
//   const newAction = req.body;
//   Actions.insert(newAction)
//   .then(action => {
//     newProj ? 
//     res.status(200).send(action) : 
//     res.status(404).send(`cant make this project congrats tho idk how you got to this error message i must know`)  
//  })
//  .catch(error => {
//     res.status(500).json(error);
//   })
// })
router.post('/', validatePost, (req, res) => {
  const newAction = req.body;
  Actions.insert(newAction)
    .then( action => {
      res.status(201).json({action});
    })
    .catch( err => {
      res.status(500).json({success: false, message: err.message})
    });
});

router.put('/:id',  (req, res) => {
  const { id } = req.params;
  const putAction = req.body
  Actions.update(id, putAction)
  .then(action => {
    action ? 
    res.status(201).send(action) : 
    res.status(404).send(`idk`)  
  })
  .catch( error => {
    res.status(500).json({error});
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Actions.remove(id)
  .then(action => {
    res.status(200).json({message: `you just deleted ${action} project hope you finished it`})
  })
  .catch( error => {
    res.status(500).json({error});
  });
})





function validatePost( req, res, next ) {
  let id = req.body.project_id;
  Projects.get(id)
  .then( project => {
      if(project) {
        if(!req.body){
            res.status(400).json({message: "missing action data"});
          }else {
          if(!req.body.description ||
            !req.body.notes || 
            !req.body.project_id){     
            res.status(400).json({message: "missing description notes or a project_id"});
          }else{
            next();
          }
        }
      }
    })
  .catch( error => {
    res.status(500).json({success: false, error});
  });
}    
    
 

module.exports = router;