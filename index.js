const express = require('express');
const helmet = require('helmet');
const postDB = require('./posts/postDb.js');
const userDB = require('./users/userDb.js');

const server = express();

server.use(express.json());


// === CRUD operations here ========================
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
        res.status(500).json({ error: "The user information could not be retrieved." })
    });

});

server.get('/api/users/:id/posts', (req, res) => {
    const id = req.params.id;

    userDB.getUserPosts(id)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    });

});

server.post('/api/users/', (req, res) => {
    const userInfo = req.body;

    userDB.insert(userInfo)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be added." })
    });
});

server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;

    userDB.remove(id)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be deleted." })
    });

});

server.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    userDB.update(id, update)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be updated." })
    });
});
// End of Users operations

// ==================================================

// Posts operations
server.get('/api/posts', (req, res) => {

    postDB.get()
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The posts information could not be retrieved." })
    });

});

server.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    postDB.getById(id)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The post information could not be retrieved." })
    });

});

server.post('/api/posts/:id', (req, res) => {
    const postInfo = req.body;

    postDB.insert(postInfo)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The post information could not be added." })
    });
});
//waiting for object like { "user_id": 1,"text": "Olololo" }

server.delete('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    postDB.remove(id)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The post information could not be deleted." })
    });

});

server.put('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    postDB.update(id, update)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The post information could not be updated." })
    });
});
// End of Posts operations

// === End of CRUD operations ======================


const port = 5050;

server.listen(port, () => {
    console.log('\n*** Server Running on http://localhost:5050 ***\n');
});