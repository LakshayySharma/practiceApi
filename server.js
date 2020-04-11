const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./config/db');
const errorHandler = require('./middleware/error');
dotenv.config({ path: './config/config.env'});

connectDb();
const bootcamps = require('./routes/bootcamps');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});