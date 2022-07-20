import app from './app';

const db = require('./db_conn/db_conn');

const port = process.env.PORT;


db.once('open', () => {
    app.listen(port, ()=> {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
})

