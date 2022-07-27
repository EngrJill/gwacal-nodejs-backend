var subjRouter = require("express").Router();
var userRouter = require("express").Router()
const auth = require("../middleware/auth.js")

module.exports = app => {
    const subjects = require("../controllers/subject.controller.js");
    const user = require("../controllers/user.controller.js")
    // Create a new Tutorial
    subjRouter.post("/add", auth, subjects.create);
    // // Retrieve all Tutorials
    subjRouter.get("/course", auth, subjects.filterByCourse);

    userRouter.post('/register', user.register);
    userRouter.post('/login', user.login)

    app.use('/api/user', userRouter)
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
    app.use('/api/subjects', subjRouter);
};
