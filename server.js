import express from 'express';
import dotenv from 'dotenv';
import color from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes/index.js';
import path from 'path';
import connectDb from './config/db.js';
import bodyParser from 'body-parser';

dotenv.config();

// Create an instance of Express
const app = express();

// Connect to the database
connectDb();

// Set up middleware
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('view engine', 'ejs');
app.set('views', './view');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use('/', routes);

// Define the port
const port = process.env.PORT || 8000;

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log("****",formData);
    // Process the form data here, e.g., save to the database
    // You can redirect or send a response back to the client
    res.send('Form submitted successfully!');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgCyan.white);
});
