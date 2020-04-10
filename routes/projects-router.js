const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel')

router.get('/', (req, res) => {
  Projects.get().then((projects) => {
    res.status(200).json(projects);
  })
})
// router.get("/", (req, res) => {
//   Projects.get().then((projects) => {
//       projects.map((project) => {
//           if (project.completed === 0) {
//               project.completed = false;
//           }   else {
//               project.completed = true;
//           }
//       });
//       res.status(200).json(projects); 
//   })
//   .catch((err) => {
//       console.log(err);
//       res.status(500).json({ errrorMessage: "Failed to get projects from data base" }); 
//   });
// });

router.get("/resources", (req, res) => {
  Projects.get().then((resources) => {
      res.status(200).json(resources)
  })
  .catch((err) => {
      console.log(err);
      res.status.apply(500).json({ errorMessage: "failed to get a list of resources from the data base" })
  });
});


module.exports = router;