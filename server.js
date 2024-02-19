import express from 'express';
const app = express();
import dotenv from 'dotenv';
import color from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes/index.js'
import path from 'path';
import connectDb from './config/db.js';
import bodyParser from 'body-parser';
dotenv.config();


// app.use(express.bodyParser());

// app.use(express.json())
app.use(express.static(path.join(process.cwd(),'public')));


//ejs setup

app.set('view engine', 'ejs');
app.set('views', './view');

//middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

connectDb();

// app.get('/', (req,res) =>{
//     return res.send("<h4> Welcome To Our Home Page </h4>")
// }) 
app.use('/', routes);











const port = process.env.PORT;

app.listen(8080 , () =>{
console.log(`Server is running on port 8080`.bgCyan.white);
})