import {router} from './router.js'
import express from 'express'

let app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.use('/', router);
app.set('port', '3000');
app.listen('3000')