let subjRouter = require("express").Router();
let userRouter = require("express").Router()
let gradeRouter = require("express").Router()
const auth = require("../middleware/auth.js")

module.exports = app => {
    const subjects = require("../controllers/subject.controller.js");
    const user = require("../controllers/user.controller.js")
    const grade = require("../controllers/grades.controller.js")
    // Create a new Tutorial
    subjRouter.post("/addsubject", auth, subjects.create);
    // // Retrieve all Tutorials
    subjRouter.get("/course", auth, subjects.filterByCourse);

    gradeRouter.post('/addgrade', auth, grade.postgrade);
    gradeRouter.get('/showgrade', auth, grade.showgrades);

    userRouter.post('/register', user.register);
    userRouter.post('/login', user.login)

    app.use('/api/user', userRouter);
    app.use('/api/grade', gradeRouter)
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


