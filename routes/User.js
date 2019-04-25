/**
 
* @swagger  
* definitions:
 *   User:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       FormofAddress:
 *         type: string
 *       Title:
 *        type: string
 *       Surname:
 *        type: string
 *       Name:
 *         type: string
 *       Email:
 *         type: string
 *       Password:
 *         type: string
 *       Address:
 *        type: string
 *       ContactNumber:
 *        type: string
 *       GroupId:
 *        type: ObjectId
 *       RoleId:
 *        type: ObjectId
 *       OrganizationId:
 *        type: ObjectId
 *       Position:
 *         type: string
 *       CreatedDate:
 *        type: date
 *       IsActive:
 *        type: string
 *       Token:
 *        type: string
 * 
 * 
 *   Role:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       Name:
 *         type: string
 *       Description:
 *         type: string
 * 

 

* /User/Create_UserCollection:
*   post:
*     tags:
*       - User
*     name: User
*     summary: Create a UserCollection
*     consumes:
*       - application/json
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: UserCollection created successfully... 

* /User/Create_User:
*   post:
*     tags:
*       - User
*     name: User
*     summary: Create a User
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             FormofAddress:
*               type: string
*             Title:
*               type: string
*             Surname:
*               type: string
*             Name:
*               type: string
*             Email:
*               type: string
*             Password:
*               type: string
*             Address:
*               type: string
*             ContactNumber:
*               type: string
*             GroupId:
*               type: string
*             RoleId:
*               type: string
*             OrganizationId:
*               type: string   
*             Position:
*               type: string
*             IsActive:
*               type: string   
*         required:
*           - Name  
*           - Email
*           - Password
*           - RoleId
*           - IsActive
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: Record inserted successfully...

* /User/Update_User:
*   post:
*     tags:
*       - User
*     name: User
*     summary: Update a User
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             Id:
*               type: string
*             FormofAddress:
*               type: string
*             Title:
*               type: string
*             Surname:
*               type: string
*             Name:
*               type: string
*             Email:
*               type: string
*             Password:
*               type: string
*             Address:
*               type: string
*             ContactNumber:
*               type: string
*             GroupId:
*               type: string
*             RoleId:
*               type: string
*             OrganizationId:
*               type: string   
*             Position:
*               type: string
*             IsActive:
*               type: string   
*         required:
*           - Id
*           - Name  
*           - Email
*           - Password
*           - RoleId
*           - IsActive
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: Record updated successfully...

* /User/Select_UserBy_Id:
*   get:
*     tags:
*       - User
*     name: Finds a User
*     summary: Finds a User 
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*       - in: query
*         name: Id
*         type: string
*         required: true
*     responses:
*       200:
*         description: To select a single User object 
 

* /User/List_User:
*   get:
*     tags:
*       - User
*     name: Select User
*     summary: Select entire  User object
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Return entire User object 
 

* /User/Delete_User:
*   delete:
*     tags:
*       - User
*     name: Delete User
*     summary: Delete a User 
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*       - in: query
*         name: Id
*         type: string
*         required: true
*     responses:
*       200:
*        description: Record deleted successfully..

* /User/Login_User:
*   get:
*     tags:
*       - User
*     name: Login User
*     summary: login a User 
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: query
*         name: Email
*         type: string
*         required: true
*       - in: query
*         name: Password
*         type: string
*         required: true
*     responses:
*       200:
*        description: Return login user object


* /User/Forget_Password:
*   post:
*     tags:
*       - User
*     name: User
*     summary: Password chanage link send to regiestered email
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             Email:
*               type: string
*         required: 
*           - Email
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Password change link successfully sent your registered email..

 
* /User/Update_Password:
*   post:
*     tags:
*       - User
*     name: User
*     summary: Update a Password
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             Email:
*               type: string
*             Password:
*               type: string
*             Token:
*               type: string
*         required: 
*           - Email
*           - Password
*           - Token
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: Password updated successfully...






 
 */ 



var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url=config.ConnectionStr;
var Database=config.Database; 
 var logger=require('./logger');
router.post('/Create_UserCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
MongoClient.connect(url, function(err, db) {
  if (err){
    logger.error("Error in Create_UserCollection method:"+err.message);
    var result= {Status:"Error",
    Data:err.message};
    return res.json(result);
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("UserCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_UserCollection method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  else{
            dbo.collection('UserCollection').createIndex({ Email: 1}, {unique: true });
            db.close();
            var result={Status:"Success",
            Data:"UserCollection is created successfully.."};
            return res.json(result);
        }
    }); 
  }
 
});
    }
    catch(ex){
      logger.error("Error in Create_UserCollection method:"+ex.message);
        var result= {Status:"Error",
        Data:ex.message};
        return res.json(result);  
    }
  }); 
  router.post('/Create_User', function(req, res) { 
      try{   
        if (req.headers.tokenkey!=config.tokenkey){
          var result={Status:"Error",
          Data:"Invalid Token key."};
          return res.json(result);
        }
        MongoClient.connect(url, function(err, db) {
            if (err){
              logger.error("Error in Create_User method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              } 
              else{
          var dbo = db.db(Database); 
          var OrganizationId ="";
          var GroupId="";
          if (req.body.OrganizationId !="" && req.body.OrganizationId!=undefined){
            var mongo = require('mongodb');  
              OrganizationId = new mongo.ObjectID(req.body.OrganizationId);
          } 
          if (req.body.GroupId !="" && req.body.GroupId!=undefined){
            var mongo = require('mongodb');  
              GroupId = new mongo.ObjectID(req.body.GroupId);
          } 
          var mongo = require('mongodb');
          var RoleId = new mongo.ObjectID(req.body.RoleId); 
          var myobj = {FormofAddress:req.body.FormofAddress,Title:req.body.Title,Surname:req.body.Surname, Name: req.body.Name, Email:req.body.Email, Password:req.body.Password,Address: req.body.Address,
          ContactNumber: req.body.ContactNumber,GroupId:GroupId,RoleId: RoleId, OrganizationId: OrganizationId,
          Position:req.body.Position,CreatedDate:new Date(),IsActive:req.body.IsActive,Token:"" }; 
           
          dbo.collection("UserCollection").insertOne(myobj, function(err, rows) { 
            if (err){
              db.close();
              if (err.message.includes("duplicate key")){
                var result= {Status:"Warning",
                Data:"Record already exist in collection"};
                return res.json(result);
              }else{
                logger.error("Error in Create_User method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }
              }  
              else{
                db.close();
                var result= {Status:"Success",
                Data:"Record inserted successfully... "};
                return res.json(result);
            }  
          });
        }

        }); 
    
}
catch(ex){
  logger.error("Error in Create_User method:"+ex.message);
    var result={Status:"Error",
    Data:ex.message};
    return res.json(result);  
}
  });
  router.post('/Update_User', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){ 
                logger.error("Error in Update_User method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result); 
            } 
            else{
        var dbo = db.db(Database); 
        var OrganizationId ="";
        var GroupId="";
        if (req.body.OrganizationId !="" && req.body.OrganizationId!=undefined){
          var mongo = require('mongodb');  
            OrganizationId = new mongo.ObjectID(req.body.OrganizationId);
        } 
        if (req.body.GroupId !="" && req.body.GroupId!=undefined){
          var mongo = require('mongodb');  
            GroupId = new mongo.ObjectID(req.body.GroupId);
        } 
        var mongo = require('mongodb');
        var RoleId = new mongo.ObjectID(req.body.RoleId);
        var mongo = require('mongodb');
        var Id = new mongo.ObjectID(req.body.Id); 
      
        var newvalues = { $set:{FormofAddress:req.body.FormofAddress,Title:req.body.Title,Surname:req.body.Title, Name: req.body.Name, Email:req.body.Email, Password:req.body.Password,Address: req.body.Address,
          ContactNumber: req.body.ContactNumber,GroupId:GroupId,RoleId: RoleId, OrganizationId: OrganizationId,
          Position:req.body.Position,IsActive:req.body.IsActive}};  
        var myquery={'_id': Id};

        dbo.collection("UserCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close();
            if (err.message.includes("duplicate key")){
              var result= {Status:"Warning",
              Data:"Record already exist in collection"};
              return res.json(result);
            }else{
              logger.error("Error in Update_User method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            }  
            else{
              db.close();
              var result= {Status:"Success",
              Data:"Record updated successfully.."};
              return res.json(result);
          }  
        });
      }

      }); 
  
}
catch(ex){
    logger.error("Error in Update_User method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});
router.get('/Select_UserBy_Id', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Select_UserBy_Id method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.query.Id);

      var myquery={'_id': o_id}; 
       dbo.collection("UserCollection").find(myquery).toArray(function(err, rows) { 
        if (err){
          logger.error("Error in Select_UserBy_Id method:"+err.message);
            db.close();
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{ 
            db.close();
            var result= {Status:"Success",
            Data:rows};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in Select_UserBy_Id method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});
router.get('/List_User', function(req, res) { 
  try{  
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in List_User method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);
       dbo.collection("UserCollection").find({}).toArray(function(err, rows) { 
        if (err){
            db.close();
            logger.error("Error in List_User method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{ 
            db.close();
            var result= {Status:"Success",
            Data:rows};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in List_User method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

router.delete('/Delete_User', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."}
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Delete_User method:"+err.message);
            var result=  {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var async =require("async");
      async.series([
        function(callback) { 
          try{
          var mongo = require('mongodb');
          var o_id = new mongo.ObjectID(req.query.Id); 
          var myquery={'UserId': o_id};
          dbo.collection("SurveyForTheUserCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in Delete_User method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){
                db.close(); 
                var result= {Status:"Warning",
                Data:"Cannot delete the user.Because user already assigned survey."};
                return res.json(result);
               }
               else{
                 callback();
               }
            }  
          });
        }
        catch(excb1){
          logger.error("Error in Delete_User method:"+excb1.message);
        var result={Status:"Error",
        Data:excb1.message};
        return res.json(result);  
      }
         },
        function(callback) {  
          try{
       var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.query.Id); 
      var myquery={'_id': o_id}; 
          dbo.collection("UserCollection").deleteMany( myquery,function(err, rows) { 
            if (err){
              logger.error("Error in Delete_User method:"+err.message);
                db.close();
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
                db.close();
                var result= {Status:"Success",
                Data:"Record deleted successfully.."};
                return res.json(result);
            }  
          });
        }
        catch(excb2){
          logger.error("Error in Delete_User method:"+excb2.message);
        var result= {Status:"Error",
        Data:excb2.message};
        return res.json(result);  
      }
         }
    ]);


       
    }

    }); 

}
catch(ex){
  logger.error("Error in Delete_User method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);  
}
}); 


router.post('/Update_Password', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Update_Password method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var async =require("async");
      async.series([
        function(callback) { 
          try{ 
          var myquery={'Email': req.body.Email};
          dbo.collection("UserCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in Update_Password method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){
                 if (rows[0].Token !="" &&  rows[0].Token==req.body.Token){
                  callback();
                 }else{
                  db.close(); 
                  var result= {Status:"Warning",
                  Data:"Invalid token key.."};
                  return res.json(result);
                 } 
               }
               else{
                db.close(); 
                var result= {Status:"Warning",
                Data:"Invalid user.."};
                return res.json(result);
               }
            }  
          });
        }
        catch(excb1){
          db.close();
          logger.error("Error in Update_Password method:"+excb1.message);
        var result= {Status:"Error",
        Data:excb1.message};
        return res.json(result);  
      }
         },
        function(callback) {  
          try{
            var newvalues = { $set:{Password:req.body.Password,Token:""}};  
            var myquery={'Email': req.body.Email};
    
     dbo.collection("UserCollection").updateOne(myquery,newvalues, function(err, rows) {  
            if (err){
              logger.error("Error in Update_Password method:"+err.message);
                db.close();
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
                db.close();
                var result= {Status:"Success",
                Data:"Password updated successfully.."};
                return res.json(result);
            }  
          });
        }
        catch(excb2){
          db.close();
          logger.error("Error in Update_Password method:"+excb2.message);
        var result= {Status:"Error",
        Data:excb2.message};
        return res.json(result);  
      }
         }
    ]);


       
    }

    }); 

}
catch(ex){
  logger.error("Error in Update_Password method:"+ex.message);
var result=  {Status:"Error",
Data:ex.message};
return res.json(result);  
}
}); 
  router.get('/Login_User', function(req, res) { 
    try{   
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Login_User method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);   
         dbo.collection("UserCollection").find({$and: [{'Email': req.query.Email},{"Password":req.query.Password},{IsActive:"True"}]}).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Login_User method:"+err.message);
              db.close();
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            }  
            else{ 
              db.close();
              if (rows.length >0){
                var result={Status:"Success",
                Data:rows};
                return res.json(result);
              }
              else{
                var result={Status:"Warning",
                Data:"Invalid user.."};
                return res.json(result); 
              }
              
          }  
        });
      }

      }); 
  
}
catch(ex){
    logger.error("Error in Login_User method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});


router.post('/Forget_Password', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result=  {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Forget_Password method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var async =require("async");
      var random =require('random-key-generator');
      var TokenKey=random(10);
      async.series([
        function(callback) { 
          try{ 
          var myquery={'Email': req.body.Email};
          dbo.collection("UserCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in Forget_Password method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){ 
                  callback(); 
               }
               else{
                db.close(); 
                var result= {Status:"Warning",
                Data:"Invalid user.."};
                return res.json(result);
               }
            }  
          });
        }
        catch(excb1){
          db.close();
          logger.error("Error in Forget_Password method:"+excb1.message);
        var result= {Status:"Error",
        Data:excb1.message};
        return res.json(result);  
      }
         }, 
         function(callback){
           try{
          var nodemailer = require('nodemailer');

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: config.Email,
              pass: config.Password,
            }
          });
          
          var mailOptions = {
            from: config.Email,
            to: req.body.Email,
            subject: 'Forget password',
            html: '<p>Are you want to change the password click here. </p>'+req.body.URL+'?Email='+req.body.Email+'&&Token='+TokenKey
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (err) {
              db.close();
              logger.error("Error in Forget_Password method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } else {
               callback();
            }
          });
        }
catch(excb2){
      db.close();
      logger.error("Error in Forget_Password method:"+excb2.message);
      var result={Status:"Error",
      Data:excb2.message};
      return res.json(result);  
}
         },
        function(callback) {  
          try{
            var newvalues = { $set:{Token:TokenKey}};  
            var myquery={'Email': req.body.Email};
    
     dbo.collection("UserCollection").updateOne(myquery,newvalues, function(err, rows) {  
            if (err){
              logger.error("Error in Forget_Password method:"+err.message);
                db.close();
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
                db.close();
                var result={Status:"Success",
                Data:"Password change link successfully sent your registered email.."};
                return res.json(result);
            }  
          });
        }
        catch(excb3){
          db.close();
          logger.error("Error in Forget_Password method:"+excb3.message);
        var result={Status:"Error",
        Data:excb3.message};
        return res.json(result);  
      }
         }
    ]);


       
    }

    }); 

}
catch(ex){
  logger.error("Error in Forget_Password method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

   

  
 
  module.exports = router;
