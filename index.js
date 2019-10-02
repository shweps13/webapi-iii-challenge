const express = require('express');
const helmet = require('helmet');
const postDB = require('./posts/postDb.js');
const userDB = require('./users/userDb.js');

const server = express();

server.use(express.json());


// === CRUD operations here ===
server.get('/', (req, res) => {
    res.send(`
      <h2>Heorhii API</h>
      <p>Welcome to the Heorhii API</p>
    `);
});

// Users operations
server.get('/api/users', (req, res) => {

    userDB.get()
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    });

});

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    userDB.getById(id)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    });

});

server.delete('/:id', (req, res) => {

});

server.put('/:id', (req, res) => {

});
// === End of CRUD operations ===


const port = 5050;

server.listen(port, () => {
    console.log('\n*** Server Running on http://localhost:5050 ***\n');
});