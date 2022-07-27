var router = require("express").Router();

module.exports = app => {
    const subjects = require("../controllers/subject.controller.js");
    // Create a new Tutorial
    router.post("/add", subjects.create);
    // // Retrieve all Tutorials
    router.get("/course", subjects.filterByCourse);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/subjects', router);
};

module.exports = app => {
  const user = require("../controllers/user.controller.js")

  router.post('/register', user.register)

  app.use('/api/user', router)

}