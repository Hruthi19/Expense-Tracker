const express = require('express');
const cors = require('cors');
const { db } = require('./database/db');
const {readdirSync} = require('fs');
const path = require('path');
const app = express();

require('dotenv').config({ path: path.resolve(__dirname,'./.env') });

const PORT = process.env.PORT;

//middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//routes
readdirSync(path.join(__dirname, 'routes')).map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db();
    const serverInstance = app.listen(PORT, (err) => {
        if (err) {
            console.error('Error starting server:', err);
        } else {
            console.log('Listening to port: ', PORT);
        }
    });

    process.on('SIGTERM', () =>{
        serverInstance.close(() => {
            console.log('Process terminated');
        });
    });
};

server();