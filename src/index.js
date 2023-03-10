const express = require("express")
require('./db/mongoose.js')
const User = require('./models/user.model.js')
const Task = require('./models/task.model.js')
const userRouter = require('./routers/user.router')
const taskRouter = require('./routers/task.router')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
