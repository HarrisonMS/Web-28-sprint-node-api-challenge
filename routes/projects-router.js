const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel')


router.get("/", (req, res) => {
  Projects.get().then((projects) => {
      projects.map((project) => {
          if (project.completed === 0) {
              project.completed = false;
          }   else {
              project.completed = true;
          }
      });
      res.status(200).json(projects); 
  })
  .catch((err) => {
      console.log(err);
      res.status(500).json({ errrorMessage: "Failed to get projects from data base" }); 
  });
});


module.exports = router;