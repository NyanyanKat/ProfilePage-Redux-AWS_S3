import app from './app';
//import dotenv from 'dotenv';
// import UserInfo from "./model/UserInfo";

const db = require('./db_conn/db_conn');

const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server is running');
// });

db.once('open', () => {
    app.listen(port, ()=> {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
})

// const user = UserInfo;
