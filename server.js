const indexRouter = require('./routes/index')

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.use('/', indexRouter)

//Set up a route that responds to resquests to the root route
// '/'




app.listen(port, () => {
    console.log(`Express is listening on port: ${port}`);
});



