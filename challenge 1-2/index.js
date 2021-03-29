const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser
const blogRoutes = require ('./routes/blogRouter'); // Import blogRoutes
const cors = require('cors');

const app = express() // Make express app

//Set body parser 
app.use(bodyParser.json()); // SUPPORT JSON ENCODED BODIES
app.use(bodyParser.urlencoded({
  extended: true
})); // SUPPORT ENCODED BODIES

//set static assets to public directory
app.use(express.static('public'));

app.use(cors());


app.use('/blog', blogRoutes);// If access localhost:3000, it will be go to blogRoutes


// Server running on port 3000
app.listen(3000, ()=>{
    console.log('server running on http://localhost:3000')
})