import express, {Express, Request, Response} from 'express';

const app: Express = express();

require('dotenv').config();

//access-control-allow-origin
const cors = require('cors')
app.use(cors());

//resolve req data
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.get('/', (req: Request, resp: Response) => {
    resp.send('OK');
});

export default app;

