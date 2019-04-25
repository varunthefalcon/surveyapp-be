var express = require('express');
var http=require("http");
var path=require("path");
var app = express();
var cors=require("cors");
var bodyparser=require("body-parser");
var swaggerUi=require('swagger-ui-express');
var swaggerJSDoc=require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
      title: 'Survey API',
      version: '1.0.0',
      description: 'Endpoints to test the user registration routes',
    },
    host: 'localhost:3000',
    basePath: '/',
    
  };

  const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
  };
   

var Group = require('./routes/Group');
var Survey=require('./routes/Survey');
var Question=require("./routes/Question");
var User=require("./routes/User");
var Classification=require('./routes/Classification');
var Organization=require('./routes/Organization'); 
var Profile=require("./routes/Profile");

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, 'public')));

 
app.use('/Group', Group);
app.use('/Survey', Survey);
app.use('/Question', Question); 
app.use('/User', User); 
app.use('/Classification', Classification); 
app.use('/Organization',Organization);
app.use('/Profile',Profile)



const swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 

 //if we are here then the specified request is not found
app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
 
//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});
 
module.exports = app;
 
//Use system configuration for port or use 6001 by default.
const port = process.env.port || 3000;
 
//Create server with exported express app
const server = http.createServer(app);
server.listen(port);