
/**
* @swagger 

* definitions:
 *   Organization:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       Name:
 *         type: string
 *       Address:
 *         type: string
 *       Email:
 *         type: string
 *       Website:
 *        type: string
 *       ClassificationId:
 *        type: ObjectId
 *       Phone:
 *        type: string
 *       Logo:
 *        type: string
 *       IsActive:
 *        type: string
 *       CreatedDate:
 *        type: date
 

* /Organization/Create_OrganizationCollection:
*   post:
*     tags:
*       - Organization
*     name: Organization
*     summary: Create a OrganizationCollection
*     consumes:
*       - application/json 
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: OrganizationCollection created successfully... 



* /Organization/Create_Organization:
*   post:
*     tags:
*       - Organization
*     name: Organization
*     summary: Create a Organization
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
*             Address:
*               type: string
*             Email:
*               type: string
*             Website:
*               type: string
*             ClassificationId:
*               type: string
*             Phone:
*               type: string
*             Logo:
*               type: string
*             IsActive:
*               type: string     
*         required:
*           - Name  
*           - Email
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... 

* /Organization/Update_Organization:
*   post:
*     tags:
*       - Organization
*     name: Organization
*     summary: Update a Organization
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
*             Address:
*               type: string
*             Email:
*               type: string
*             Website:
*               type: string
*             ClassificationId:
*               type: string
*             Phone:
*               type: string
*             Logo:
*               type: string
*             IsActive:
*               type: string     
*         required:
*           - Id
*           - Name  
*           - Email
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... 
 


* /Organization/Select_OrganizationBy_Id:
*   get:
*     tags:
*       - Organization
*     name: Finds a Organization
*     summary: Finds a Organization 
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
*         description: To select a single Organization object 
 

* /Organization/List_Organization:
*   get:
*     tags:
*       - Organization
*     name: Select Organization
*     summary: Select entire  Organization object
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
*         description: Return entire Organization object 
 

* /Organization/Delete_Organization:
*   delete:
*     tags:
*       - Organization
*     name: Delete Organization
*     summary: Delete a Organization 
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
router.post('/Create_OrganizationCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
MongoClient.connect(url, function(err, db) {
  if (err){ 
    logger.error("Error in Create_OrganizationCollection method:"+err.message);
    var result={Status:"Error",
    Data:err.message};
    return res.json(result);
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("OrganizationCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_OrganizationCollection method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  else{
            dbo.collection('OrganizationCollection').createIndex({ Name: 1,ClassificationId:1 }, {unique: true });
            db.close();
            var result={Status:"Success",
            Data:"OrganizationCollection is created successfully.."};
            return res.json(result);
        }
    }); 
  }
 
});
    }
    catch(ex){
        logger.error("Error in Create_OrganizationCollection method:"+ex.message);
        var result={Status:"Error",
        Data:ex.message};
        return res.json(result);  
    }
  }); 

  router.post('/Create_Organization', function(req, res) { 
      try{  
        if (req.headers.tokenkey!=config.tokenkey){
          var result= {Status:"Error",
          Data:"Invalid Token key."};
          return res.json(result);
        } 
        MongoClient.connect(url, function(err, db) {
            if (err){ 
                logger.error("Error in Create_Organization method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result); 
              } 
              else{
          var dbo = db.db(Database); 
          var mongo = require('mongodb');
        var ClassificationId = new mongo.ObjectID(req.body.ClassificationId);
          var myobj = { Name:req.body.Name,Address:req.body.Address,Email:req.body.Email,Website:req.body.Website,
          ClassificationId:ClassificationId,Phone:req.body.Phone,Logo:req.body.Logo,
          CreatedDate:new Date(),IsActive:req.body.IsActive}; 
          dbo.collection("OrganizationCollection").insertOne(myobj, function(err, rows) { 
            if (err){
                db.close(); 
                if (err.message.includes("duplicate key")){
                  var result= {Status:"Warning",
                  Data:"Record already exist in collection"};
                  return res.json(result);
                }else{
                  logger.error("Error in Create_Organization method:"+err.message);
                  var result=  {Status:"Error",
                  Data:err.message};
                  return res.json(result);
                }
                
              }  
              else{
                db.close();
                var result={Status:"Success",
                Data:"Record inserted successfully... "};
                return res.json(result);
            }  
          });
        }

        }); 
    
}
catch(ex){
    logger.error("Error in Create_Organization method:"+ex.message);
    var result= {Status:"Error",
    Data:ex.message};
    return res.json(result);  
}
  }); 
 
router.get('/List_Organization', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in List_Organization method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);
         dbo.collection("OrganizationCollection").find({}).toArray(function(err, rows) { 
          if (err){
              db.close();
              logger.error("Error in List_Organization method:"+err.message);
              var result= {Status:"Error",
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
    logger.error("Error in List_Organization method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

router.post('/Update_Organization', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){ 
              logger.error("Error in Update_Organization method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result); 
            } 
            else{
        var dbo = db.db(Database); 
        var mongo = require('mongodb');
        var ClassificationId = new mongo.ObjectID(req.body.ClassificationId); 
        var newvalues ={ $set:{ Name:req.body.Name,Address:req.body.Address,Email:req.body.Email,Website:req.body.Website,
          ClassificationId:ClassificationId,Phone:req.body.Phone,Logo:req.body.Logo,
          CreatedDate:new Date(),IsActive:req.body.IsActive}};  
       var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.body.Id); 
        var myquery={'_id': o_id}; 
        dbo.collection("OrganizationCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close();
            if (err.message.includes("duplicate key")){
              var result= {Status:"Warning",
              Data:"Record already exist in collection"};
              return res.json(result);
            }else{
              logger.error("Error in Update_Organization method:"+err.message);
              var result= {Status:"Error",
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
    logger.error("Error in Update_Organization method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
}); 

router.get('/Select_OrganizationBy_Id', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }  
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Select_OrganizationBy_Id method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);  
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id);

        var myquery={'_id': o_id}; 
         dbo.collection("OrganizationCollection").find(myquery).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Select_OrganizationBy_Id method:"+err.message);
              db.close();
              var result= {Status:"Error",
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
    logger.error("Error in Select_OrganizationBy_Id method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
}); 

router.delete('/Delete_Organization', function(req, res) { 
  try{  
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Delete_Organization method:"+err.message);
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
          var mongo = require('mongodb');
          var o_id = new mongo.ObjectID(req.query.Id); 
          var myquery={'OrganizationId': o_id};
          dbo.collection("UserCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in Delete_Organization method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){
                db.close(); 
                var result={Status:"Warning",
                Data:"Cannot delete the Organization.Because Organization refer to UserCollection."};
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
          logger.error("Error in Delete_Organization method:"+excb1.message);
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
          dbo.collection("OrganizationCollection").deleteMany( myquery,function(err, rows) { 
            if (err){
              logger.error("Error in Delete_Organization method:"+err.message);
                db.close();
                var result= {Status:"Error",
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
          db.close();
          logger.error("Error in Delete_Organization method:"+excb2.message);
        var result={Status:"Error",
        Data:excb2.message};
        return res.json(result);  
      }
         }
    ]);


       
    }

    }); 

}
catch(ex){
  logger.error("Error in Delete_Organization method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
}); 




  module.exports = router;
