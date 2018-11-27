const express = require('express');
const app = express();

app.use(express.json());

app.get('/helloworld', (req, res) => {
    res.send(
        {message: 'ezigen'}
    );
});

app.get('/secondroute', (req, res) => {
    res.send(
        {message: 'success'}
    )
});

app.listen(3000, () => console.log('Server is listening on port 3000'));