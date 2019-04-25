
/**
* @swagger 

 * definitions:
 *   Group:
 *     properties:
 *       _id:
 *         type: string
 *       Name:
 *         type: string
 *       Description:
 *         type: string
 *       IsActive:
 *         type: string


* /Group/Create_ApplicationGroupCollection:
*   post:
*     tags:
*       - Group
*     name: Group
*     summary: Create a ApplicationGroupCollection
*     consumes:
*       - application/json
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: ApplicationGroupCollection created successfully... 



* /Group/Create_Group:
*   post:
*     tags:
*       - Group
*     name: Group
*     summary: Create a group
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             Name:
*               type: string
*             IsActive:
*               type: string
*             Description:
*               type: string
*               
*         required:
*           - Name
*           - IsActive
*           - Description
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... 
 
* /Group/Update_Group:
*   post:
*     tags:
*       - Group
*     name: Group
*     summary: Update a group
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
*             Name:
*               type: string
*             IsActive:
*               type: string
*             Description:
*               type: string
*               
*         required:
*           - Id
*           - Name
*           - IsActive
*           - Description
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... 
 


* /Group/Select_GroupBy_Id:
*   get:
*     tags:
*       - Group
*     name: Finds a Group
*     summary: Finds a Group 
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
*         description: To select a single Group object 
 

* /Group/List_Group:
*   get:
*     tags:
*       - Group
*     name: Select Group
*     summary: Select entire  Group object
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
*         description: Return entire Group object 
 

* /Group/Delete_Group:
*   delete:
*     tags:
*       - Group
*     name: Delete Group
*     summary: Delete a Group 
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
*     responses:
*       200:
*        description: Record deleted successfully..  
 
 */ 


var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url=config.ConnectionStr;
var Database=config.Database;
var logger=require('./logger'); 

router.post('/Create_ApplicationGroupCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      }
MongoClient.connect(url, function(err, db) {
  if (err){ 
    logger.error("Error in Create_ApplicationGroupCollection method:"+err.message);
    var result= {Status:"Error",
    Data:err.message};
    return res.json(result);;
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("ApplicationGroupCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_ApplicationGroupCollection method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);;
          }  else{
            dbo.collection('ApplicationGroupCollection').createIndex({ Name: 1 }, {unique: true });
            db.close();
            var result= {Status:"Success",
            Data:"ApplicationGroupCollection is created successfully.."};
            return res.json(result);;
        }
    }); 
  }
 
});
    }
    catch(ex){
        logger.error("Error in Create_ApplicationGroupCollection method:"+ex.message);
        var result=  {Status:"Error",
        Data:ex.message};
        return res.json(result);;  
    }
  });


  router.post('/Create_Group', function(req, res) { 
      try{   
        if (req.headers.tokenkey!=config.tokenkey){
          var result={Status:"Error",
          Data:"Invalid Token key."};
          return res.json(result);;
        }
        MongoClient.connect(url, function(err, db) {
            if (err){ 
                logger.error("Error in Create_Group method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);; 
              } 
              else{
          var dbo = db.db(Database); 
          var myobj = { Name: req.body.Name, Description:req.body.Description, IsActive: req.body.IsActive };  
          dbo.collection("ApplicationGroupCollection").insertOne(myobj, function(err, rows) { 
            if (err){
              db.close();
              if (err.message.includes("duplicate key")){
                var result={Status:"Warning",
                Data:"Record already exist in collection"};
                return res.json(result);;
              }else{
                logger.error("Error in Create_Group method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);;
              } 
              }  
              else{
                db.close();
                var result={Status:"Success",
                Data:"Record inserted successfully..."};
                return res.json(result);;
            }  
          });
        }

        }); 
    
}
catch(ex){
    logger.error("Error in Create_Group method:"+ex.message);
    var result={Status:"Error",
    Data:ex.message};
    return res.json(result);;  
}
  });

 
router.get('/List_Group', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in List_Group method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);;
            } 
            else{
        var dbo = db.db(Database);
         dbo.collection("ApplicationGroupCollection").find({}).toArray(function(err, rows) { 
          if (err){
              db.close();
              logger.error("Error in List_Group method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);;
            }  
            else{ 
              db.close();
              var result={Status:"Success",
              Data:rows};
              return res.json(result);;
          }  
        });
      }

      }); 
  
}
catch(ex){
    logger.error("Error in List_Group method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);;  
}
});

router.post('/Update_Group', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      }
      var ObjectId = require('mongodb').ObjectId;
    if (ObjectId.isValid(req.body.Id)==false){ 
      var result= {Status:"Error",
      Data:"Invalid Id.."};
      return res.json(result);;
    }
      MongoClient.connect(url, function(err, db) {
          if (err){ 
                logger.error("Error in Update_Group method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);; 
            } 
            else{
        var dbo = db.db(Database); 
        var newvalues = { $set:{ Name: req.body.Name, Description:req.body.Description, IsActive: req.body.IsActive }}; 
        var mongo = require('mongodb');
        
        var o_id = new mongo.ObjectID(req.body.Id); 
        var myquery={'_id': o_id};

        dbo.collection("ApplicationGroupCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close();
            if (err.message.includes("duplicate key")){
              var result={Status:"Warning",
              Data:"Record already exist in collection"};
              return res.json(result);;
            }else{
              logger.error("Error in Update_Group method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            }  
            else{
              db.close();
              var result={Status:"Success",
              Data:"Record updated successfully.."};
              return res.json(result);
          }  
        });
      }

      }); 
  
}
catch(ex){
    logger.error("Error in Update_Group method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);
}
}); 

router.get('/Select_GroupBy_Id', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      } 
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Select_GroupBy_Id method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);;
            } 
            else{
        var dbo = db.db(Database);  
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id); 
        var myquery={'_id': o_id}; 
         dbo.collection("ApplicationGroupCollection").find(myquery).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Select_GroupBy_Id method:"+err.message);
              db.close();
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);;
            }  
            else{ 
              db.close();
              var result={Status:"Success",
              Data:rows};
              return res.json(result);
          }  
        });
      }

      }); 
  
}
catch(ex){
    logger.error("Error in Select_GroupBy_Id method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);;  
}
});


router.delete('/Delete_Group', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Delete_Group method:"+err.message);
            var result= {Status:"Error",
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
          var myquery={'GroupId': o_id};
          dbo.collection("UserCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in Delete_Group method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){
                db.close(); 
                var result= {Status:"Warning",
                Data:"Cannot delete the Group.Because Group refer to UserCollection."};
                return res.json(result);
               }
               else{
                 callback();
               }
            }  
          });
        }
        catch(excb1){
          db.close();
          logger.error("Error in Delete_Group method:"+excb1.message);
        var result= {Status:"Error",
        Data:excb1.message};
        return res.json(result); 
      }
         },
        function(callback) {  
          try{
       var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.query.Id); 
      var myquery={'_id': o_id}; 
          dbo.collection("ApplicationGroupCollection").deleteMany( myquery,function(err, rows) { 
            if (err){
              logger.error("Error in Delete_Group method:"+err.message);
                db.close();
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
                db.close();
                var result=  {Status:"Success",
                Data:"Record deleted successfully.."};
                return res.json(result);
            }  
          });
        }
        catch(excb2){
          db.close();
          logger.error("Error in Delete_Group method:"+excb2.message);
        var result= {Status:"Error",
        Data:excb2.message};
        return res.json(result);;  
      }
         }
    ]);


       
    }

    }); 

}
catch(ex){
  logger.error("Error in Delete_Group method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);;  
}
}); 


  module.exports = router;
