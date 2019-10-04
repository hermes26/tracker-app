const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load env
dotenv.config({ path: './config.env' }); //do this once, and then we can access env variables from all over our application

const app = express();

//Dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Profile routes
app.use('/api/v1/profile', require('./routes/profile'))

const port = process.env.PORT || 8000; 

app.listen(port, () =>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
});