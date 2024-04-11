const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHanlerMiddleware = require('./middleware/error-handler');

const port = process.env.PORT || 3000;

// MIDDLWARE
// static assets
app.use(express.static('./public'));
// middleware
app.use(express.json());
// rout
app.use('/api/v1/tasks', tasks);

app.use(notFound);

app.use(errorHanlerMiddleware);

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const start = async () => {
    
    try {
        await connectDB(process.env.MANGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch(error) {
        console.log(error);
    }
}

start();