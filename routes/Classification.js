
/**
* @swagger 
 
 * definitions:
 *   Classification:
 *     properties:
 *       _id:
 *         type: string
 *       Name:
 *         type: string
 *       Description:
 *         type: string
 *       ParentClass:
 *         type: string
 * 
 

* /Classification/Create_ClassificationCollection:
*   post:
*     tags:
*       - Classification
*     name: Classification
*     summary: Create a ClassificationCollection
*     consumes:
*       - application/json 
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: ClassificationCollection created successfully... 



* /Classification/Create_Classification:
*   post:
*     tags:
*       - Classification
*     name: Classification
*     summary: Create a Classification
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
*             Description:
*               type: string
*             ParentClass:
*               type: string
*               
*         required:
*           - Name 
*           - ParentClass
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... 
 
* /Classification/Update_Classification:
*   post:
*     tags:
*       - Classification
*     name: Classification
*     summary: Update a Classification
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
*             ParentClass:
*               type: string
*             Description:
*               type: string
*               
*         required:
*           - Id
*           - Name
*           - ParentClass
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... 
 


* /Classification/Select_ClassificationBy_Id:
*   get:
*     tags:
*       - Classification
*     name: Finds a Classification
*     summary: Finds a Classification 
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
*         description: To select a single Classification object 
 

* /Classification/List_Classification:
*   get:
*     tags:
*       - Classification
*     name: Select Classification
*     summary: Select entire  Classification object
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
*         description: Return entire Classification object 
 

* /Classification/Delete_Classification:
*   delete:
*     tags:
*       - Classification
*     name: Delete Classification
*     summary: Delete a Classification 
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
 
 */ 

 
var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url=config.ConnectionStr;
var Database=config.Database;
var logger=require('./logger'); 
var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
router.post('/Create_ClassificationCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result=  {Status:"Error",Data:"Invalid Token key."};
        return res.json(result);
      }
MongoClient.connect(url, function(err, db) {
  if (err){ 
    db.close();
    logger.error("Error in Create_ClassificationCollection method:"+err.message);
    var result={Status:"Error",Data:err.message};
    return res.json(result);
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("ClassificationCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_ClassificationCollection method:"+err.message);
            var result={Status:"Error", Data:err.message};
            return res.json(result);
          }  else{
            dbo.collection('ClassificationCollection').createIndex({ Name: 1,ParentClass:1 }, {unique: true });
            db.close();
            var result= {Status:"Success", Data:"ClassificationCollection is created successfully.."};
            return res.json(result);
        }
    }); 
  }
 
});
    }
    catch(ex){
        logger.error("Error in Create_ClassificationCollection method:"+ex.message);
        var result= {Status:"Error",Data:ex.message};
        return  res.json(result);  
    }
  });


  router.post('/Create_Classification', function(req, res) { 
      try{   
        if (req.headers.tokenkey!=config.tokenkey){
          var result= {Status:"Error",Data:"Invalid Token key."};
          res.json(result);
        }
        MongoClient.connect(url, function(err, db) {
            if (err){ 
                logger.error("Error in Create_Classification method:"+err.message);
                var result= {Status:"Error", Data:err.message};
                res.json(result); 
              } 
              else{
          var dbo = db.db(Database);  
         var myobj = { Name: req.body.Name, Description:req.body.Description, ParentClass: req.body.ParentClass }; 
          dbo.collection("ClassificationCollection").insertOne(myobj, function(err, rows) { 
            if (err){
              db.close();
              if (err.message.includes("duplicate key")){
                var result={Status:"Warning",Data:"Record already exist in collection"}; 
                res.json(result);
              }else{
                logger.error("Error in Create_Classification method:"+err.message);
                var result= {Status:"Error",Data:err.message};
                res.json(result);
              } 
              }  
              else{
                db.close();
                var result={Status:"Success",Data:"Record inserted successfully... "};
                res.json(result);
            }  
          });
        }

        }); 
    
}
catch(ex){
    logger.error("Error in Create_Classification method:"+ex.message);
    var result={Status:"Error",
    Data:ex.message};
    res.json(result);  
}
  });

 
router.get('/List_Classification', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result)
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in List_Classification method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return  res.json(result);
            } 
            else{
        var dbo = db.db(Database);
         dbo.collection("ClassificationCollection").find({}).toArray(function(err, rows) { 
          if (err){
              db.close();
              logger.error("Error in List_Classification method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return  res.json(result);
            }  
            else{ 
              db.close();
              var result={Status:"Success",Data:rows}; 
              return  res.json(result);
          }  
        });
      }

      }); 
  
}
catch(ex){
    logger.error("Error in List_Classification method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

router.post('/Update_Classification', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){ 
              logger.error("Error in Update_Classification method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            
            } 
            else{
        var dbo = db.db(Database); 
       var newvalues = { $set:{ Name: req.body.Name, Description:req.body.Description, ParentClass: req.body.ParentClass }}; 
       var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.body.Id); 
        var myquery={'_id': o_id}; 
        dbo.collection("ClassificationCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close();
            if (err.message.includes("duplicate key")){
              var result= {Status:"Warning",
              Data:"Record already exist in collection"};
              return res.json(result);
            }else{
              logger.error("Error in Update_Classification method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return  res.json(result);
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
    logger.error("Error in Update_Classification method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return  res.json(result);  
}
}); 

router.get('/Select_ClassificationBy_Id', function(req, res) { 
    try{  
    //  try{
    //   var ObjectID = require('mongodb').ObjectID;
    //   var test =new ObjectID(req.query.Id);
    //  }catch(exc){
    //   var result={Status:"Warning",
    //   Data:"Invalid Id"};
    //  return res.json(result);
    //  }

    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Select_ClassificationBy_Id method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);  
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id); 
        var myquery={'_id': o_id}; 
         dbo.collection("ClassificationCollection").find(myquery).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Select_ClassificationBy_Id method:"+err.message);
              db.close();
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
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
    logger.error("Error in Select_ClassificationBy_Id method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});


router.delete('/Delete_Classification', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }

      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Delete_Classification method:"+err.message);
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
            var myquery={'ClassificationId': o_id};
            dbo.collection("OrganizationCollection").find(myquery).toArray(function(err, rows) { 
              if (err){
                  db.close();
                  logger.error("Error in Delete_Classification method:"+err.message);
                  var result= {Status:"Error",
                  Data:err.message};
                  return res.json(result);
                }  
                else{ 
                 if(rows.length > 0){
                  db.close(); 
                  var result= {Status:"Warning",
                  Data:"Cannot delete the Classification.Because classification refered to organization collection."};
                  return  res.json(result);
                 }
                 else{
                   callback();
                 }
              }  
            });
          }
          catch(excb1){
            db.close();
            logger.error("Error in Delete_Classification method:"+excb1.message);
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
            dbo.collection("ClassificationCollection").deleteMany( myquery,function(err, rows) { 
              if (err){
                logger.error("Error in Delete_Classification method:"+err.message);
                  db.close();
                  var result={Status:"Error",
                  Data:err.message};
                  return res.json(result);
                }  
                else{ 
                  db.close();
                  var result={Status:"Success",
                  Data:"Record deleted successfully.."};
                  return res.json(result);
              }  
            });
          }
          catch(excb2){
            db.close();
            logger.error("Error in Delete_Classification method:"+excb2.message);
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
    logger.error("Error in Delete_Classification method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
}); 


  module.exports = router;
