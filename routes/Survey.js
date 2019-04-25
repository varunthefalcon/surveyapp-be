/**
* @swagger  
 
* definitions:
 *   Survey:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       SurveyTitle:
 *         type: string
 *       Description:
 *         type: string
 *       Instruction:
 *         type: string
 *       SurveyStart:
 *         type: date
 *       SurveyEnd:
 *         type: date
 *       CreatedDate:
 *         type: date
 *       UpdatedDate:
 *         type: date
 *       IsActive:
 *         type: string
 *       OrganizationId:
 *        type: ObjectId
 *       SurveyURLRoute:
 *        type: string
 * 
 
  *   SurveyForTheUser:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       SurveyId:
 *         type: ObjectId
 *       UserId:
 *         type: ObjectId
 *       SurveyDueDate:
 *         type: date
 *       LastFollowedDate:
 *        type: date
 *       IsSurveyCompleted:
 *        type: string
 *       SurveyCompletedDate:
 *        type: date
 *       Answer:
 *        type: object
 * 
 * 
* /Survey/Create_SurveyCollection:
*   post:
*     tags:
*       - Survey
*     name: Classification
*     summary: Create a SurveyCollection
*     consumes:
*       - application/json 
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: SurveyCollection created successfully...  

* /Survey/Create_Survey:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary: Create a Survey
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             SurveyTitle:
*               type: string
*             Description:
*               type: string
*             Instructions:
*               type: string
*             SurveyStart:
*               type: date
*             SurveyEnd:
*               type: date
*             OrganizationId:
*               type: string
*             IsActive:
*               type: string
*             SurveyURLRoute:
*               type: string
*                 
*         required:
*           - SurveyTitle  
*           - SurveyStart
*           - SurveyEnd
*           - IsActive
*           - OrganizationId
*           - SurveyURLRoute
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... and return QuestionId


* /Survey/Update_Survey:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary: Update a Survey
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
*             SurveyTitle:
*               type: string
*             Description:
*               type: string
*             Instructions:
*               type: string
*             SurveyStart:
*               type: date
*             SurveyEnd:
*               type: date
*             OrganizationId:
*               type: string
*             IsActive:
*               type: string
*             SurveyURLRoute:
*               type: string
*                 
*         required:
*           - Id
*           - SurveyTitle  
*           - SurveyStart
*           - SurveyEnd
*           - IsActive
*           - OrganizationId
*           - SurveyURLRoute
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... and return QuestionId

* /Survey/Select_SurveyBy_Id:
*   get:
*     tags:
*       - Survey
*     name: Finds a Survey
*     summary: Finds a Survey 
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
*         description: To select a single Survey object 
 

* /Survey/List_Survey:
*   get:
*     tags:
*       - Survey
*     name: Select Survey
*     summary: Select entire  Survey object
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
*         description: Return entire Survey object 
 

* /Survey/Delete_Survey:
*   delete:
*     tags:
*       - Survey
*     name: Delete Survey
*     summary: Delete a Survey 
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

* /Survey/Activate_Survey:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary: Activate a survey
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
*             IsActive:
*               type: string 
*                 
*         required:
*           - Id 
*           - IsActive
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Survey activated successfully..

* /Survey/DeActivate_survey:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary: Deactivate a survey
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
*             IsActive:
*               type: string 
*                 
*         required:
*           - Id 
*           - IsActive
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: Survey deactivated successfully..



* /Survey/AssignSurveyforUser:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary: Assign  survey
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             UserId:
*               type: string
*             SurveyId:
*               type: string
*                 
*         required:
*           - UserId  
*           - SurveyId
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Survey assigned successfully..


* /Survey/TakeSurvey:
*   get:
*     tags:
*       - Survey
*     name: Finds a Survey
*     summary: Finds a Survey 
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
*         name: UserId
*         type: string
*         required: true
*     responses:
*       200:
*         description: Return survey question object list

* /Survey/SaveSurvey_Response:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary: save survey response
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             SurveyAssignId:
*               type: string
*             Answer:
*               type: object
*                 
*         required:
*           - SurveyAssignId
*           - Answer  
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Answer saved successfully..


* /Survey/GetAnswerBy_SurveyandUserId:
*   get:
*     tags:
*       - Survey
*     name:  Finds a survey answer
*     summary: Finds a survey answer 
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: query
*         name: SurveyId
*         type: string
*         required: true
*       - in: query
*         name: UserId
*         type: string
*         required: false
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*        description: Return survey answer object


 * /Survey/SendEmailto_TakeSurvey:
*   post:
*     tags:
*       - Survey
*     name: Survey
*     summary:  Send email to take survey
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             SurveyId:
*               type: string
*             UserId:
*               type: string
 
*               
*         required:
*           - SurveyId 
*           - UserId
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Email sent successfully...   


* /Survey/GetSurveyQuestionsBy_SurveyId:
*   get:
*     tags:
*       - Survey
*     name: Finds a survey questions
*     summary: Finds a survey questions 
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
*         name: SurveyId
*         type: string
*         required: true
*       - in: query
*         name: UserId
*         type: string
*         required: true
*     responses:
*       200:
*         description: To select a survey questions object 



 */ 





var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url=config.ConnectionStr;
var Database=config.Database;
var logger=require('./logger');
 

 
 
router.post('/Create_SurveyCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
MongoClient.connect(url, function(err, db) {
  if (err){ 
    logger.error("Error in Create_SurveyCollection method:"+err.message);
    var result=  {Status:"Error",
    Data:err.message};
    return res.json(result);
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("SurveyCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_SurveyCollection method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  else{
            dbo.collection('SurveyCollection').createIndex({ SurveyTitle: 1,OrganizationId:1 }, {unique: true });
            db.close();
            var result={Status:"Success",
            Data:"SurveyCollection is created successfully.."};
            return res.json(result);
        }
    }); 
  }
 
});
    }
    catch(ex){
        logger.error("Error in Create_SurveyCollection method:"+ex.message);
        var result={Status:"Error",
        Data:ex.message};
        return res.json(result);  
    }
  });


  router.post('/Create_Survey', function(req, res) { 
      try{  
        if (req.headers.tokenkey!=config.tokenkey){
          var result={Status:"Error",
          Data:"Invalid Token key."};
          return res.json(result);
        } 
        MongoClient.connect(url, function(err, db) {
            if (err){ 
                logger.error("Error in Create_Survey method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              } 
              else{
          var dbo = db.db(Database);
          var myobj = {}; 
            var mongo = require('mongodb'); 
            var OrganizationId = new mongo.ObjectID(req.body.OrganizationId); 
            var myobj = { SurveyTitle: req.body.SurveyTitle, Description:req.body.Description, Instructions: req.body.Instructions,
                SurveyStart: new Date(req.body.SurveyStart),SurveyEnd: new Date(req.body.SurveyEnd),CreatedDate: new Date(),UpdatedDate:new Date(),
                IsActive: req.body.IsActive,OrganizationId: OrganizationId,SurveyURLRoute: req.body.SurveyURLRoute }; 
           
          
          dbo.collection("SurveyCollection").insertOne(myobj, function(err, rows) { 
            if (err){
              db.close();
              if (err.message.includes("duplicate key")){
                var result={Status:"Warning",
                Data:"Record already exist in collection"};
                return res.json(result);
              }else{
                logger.error("Error in Create_Survey method:"+err.message);
                var result=  {Status:"Error",
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
    logger.error("Error in Create_Survey method:"+ex.message);
    var result= {Status:"Error",
    Data:ex.message};
    return res.json(result);  
}
  });

 
router.get('/List_Survey', function(req, res) { 
    try{  
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      } 
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in List_Survey method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);
         dbo.collection("SurveyCollection").find({}).toArray(function(err, rows) { 
          if (err){
              db.close();
              logger.error("Error in List_Survey method:"+err.message);
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
    logger.error("Error in List_Survey method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

router.post('/Update_Survey', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Update_Survey method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database); 
          var mongo = require('mongodb'); 
            var OrganizationId = new mongo.ObjectID(req.body.OrganizationId); 
           var newvalues = { $set:{ SurveyTitle: req.body.SurveyTitle, Description:req.body.Description, Instructions: req.body.Instructions,
            SurveyStart: req.body.SurveyStart,SurveyEnd: req.body.SurveyEnd,UpdatedDate:new Date(),IsActive: req.body.IsActive,
           OrganizationId:OrganizationId,SurveyURLRoute: req.body.SurveyURLRoute }};  
      var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.body.Id); 
        var myquery={'_id': o_id};

        dbo.collection("SurveyCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close();
            if (err.message.includes("duplicate key")){
              var result={Status:"Warning",
              Data:"Record already exist in collection"};
              return res.json(result);
            }else{
              logger.error("Error in Update_Survey method:"+err.message);
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
    logger.error("Error in Update_Survey method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});



router.get('/Select_SurveyBy_Id', function(req, res) { 
    try{  
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      } 
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Select_SurveyBy_Id method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);  
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id);

        var myquery={'_id': o_id}; 
         dbo.collection("SurveyCollection").find(myquery).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Select_SurveyBy_Id method:"+err.message);
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
    logger.error("Error in Select_SurveyBy_Id method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});


router.delete('/Delete_Survey', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Delete_Survey method:"+err.message);
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
            var myquery={'SurveyId': o_id};
            dbo.collection("QuestionCollection").find(myquery).toArray(function(err, rows) { 
              if (err){
                  db.close();
                  logger.error("Error in Delete_Survey method:"+err.message);
                  var result={Status:"Error",
                  Data:err.message};
                  return res.json(result);
                }  
                else{ 
                 if(rows.length > 0){
                  db.close(); 
                  var result=  {Status:"Warning",
                  Data:"Cannot delete the servey.Because question's already formed this survey."};
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
            logger.error("Error in Delete_Survey method:"+excb1.message);
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
            dbo.collection("SurveyCollection").deleteMany( myquery,function(err, rows) { 
              if (err){
                logger.error("Error in Delete_Survey method:"+err.message);
                  db.close();
                  var result=  {Status:"Error",
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
            logger.error("Error in Delete_Survey method:"+excb2.message);
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
    logger.error("Error in Delete_Survey method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
}); 

router.post('/DeActivate_Survey', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in DeActivate_Survey method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database); 
    var newvalues = { $set:{IsActive: req.body.IsActive}};  
    var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.body.Id); 
      var myquery={'_id': o_id};

      dbo.collection("SurveyCollection").updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          logger.error("Error in DeActivate_Survey method:"+err.message);
            db.close();
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
            db.close();
            var result={Status:"Success",
            Data:"Survey deactivated successfully.."};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in DeActivate_Survey method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

router.post('/Activate_Survey', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Activate_Survey method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
     var newvalues = { $set:{IsActive: req.body.IsActive}};  
    var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.body.Id); 
      var myquery={'_id': o_id};

      dbo.collection("SurveyCollection").updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          logger.error("Error in Activate_Survey method:"+err.message);
            db.close();
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
            db.close();
            var result= {Status:"Success",
            Data:"Survey activated successfully.."};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in Activate_Survey method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

router.post('/AssignSurveyforUser', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in AssignSurveyforUser method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var async =require("async");
      var SurveyDueDate=""
      var mongo = require('mongodb');
      var SurveyId = new mongo.ObjectID(req.body.SurveyId);

      var mongo = require('mongodb');
      var UserId = new mongo.ObjectID(req.body.UserId); 
      async.series([
        function(callback) {
           try
         {  
          var myquery={'_id': SurveyId};
          dbo.collection("SurveyCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in AssignSurveyforUser method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){
                SurveyDueDate=new Date(rows[0].SurveyEnd);
                callback();
               }
               else{ 
                 db.close(); 
                 var result={Status:"Warning",
                 Data:"Survey record not found in collection..."};
                 return res.json(result);
               }
            }  
          });
        }
        catch(excb1){
          db.close();
          logger.error("Error in AssignSurveyforUser method:"+excb1.message);
        var result= {Status:"Error",
        Data:excb1.message};
        return res.json(result);  
        }
         },
        function(callback) {    
          try{
          dbo.collection("SurveyForTheUserCollection").find({$and: [{'SurveyId': SurveyId},{"UserId":UserId}]}).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in AssignSurveyforUser method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
               if(rows.length > 0){
                db.close(); 
                var result= {Status:"Warning",
                Data:"Survey already assigned for this user..."};
                return res.json(result); 
               }
               else{ 
                callback();
               }
            }  
          });
        }
        catch(excb2){
          db.close();
          logger.error("Error in AssignSurveyforUser method:"+excb2.message);
        var result= {Status:"Error",
        Data:excb2.message};
        return res.json(result);  
        }
         },
         function(callback){
           try{
             var myobj={SurveyId:SurveyId,UserId:UserId,SurveyDueDate:SurveyDueDate,LastFollowedDate:new Date(req.body.LastFollowedDate),
              IsSurveyCompleted:"False",SurveyCompletedDate:"",Answer:[]};
          dbo.collection("SurveyForTheUserCollection").insertOne(myobj, function(err, rows) {  
            if (err){ 
              db.close();
                logger.error("Error in AssignSurveyforUser method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{ 
                db.close();
                var result= {Status:"Success",
                Data:"Survey assigned successfully... "
                 };
                return res.json(result);
            }  
          });
         }
         catch(excb3){
        db.close();
        logger.error("Error in AssignSurveyforUser method:"+excb3.message);
        var result= {Status:"Error",
        Data:ex.message};
        return res.json(result);  
        }
        }
       
    ]); 
    }

    }); 

}
catch(ex){
  logger.error("Error in AssignSurveyforUser method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}


});


router.get('/TakeSurvey', function(req, res) { 
  try{  
    if (req.headers.tokenkey!=config.tokenkey){
      var result=  {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in TakeSurvey method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var async =require("async"); 

      var mongo = require('mongodb');
      var UserId = new mongo.ObjectID(req.query.UserId); 
      var SurveyId="";
      var OrganizationId="";
      var OrganizationCollection=[];
      async.series([ 
         function(callback) {  
          try{
            if(OrganizationId !="")  {
              dbo.collection("OrganizationCollection").find({'_id': OrganizationId}).toArray(function(err, rows) { 
                if (err){
                    db.close();
                    logger.error("Error in TakeSurvey method:"+err.message);
                    var result=  {Status:"Error",
                    Data:err.message};
                    return res.json(result);
                  }  
                  else{  
                    OrganizationCollection=rows;
                    callback(); 
                }  
              });
            }else{
            callback();
            }
         
        }
        catch(excb2){
          db.close();
          logger.error("Error in TakeSurvey method:"+excb2.message);
        var result= {Status:"Error",
        Data:excb2.message};
        return res.json(result);  
        }
         },

        function(callback) {    
          try{ 
            dbo.collection("SurveyForTheUserCollection").aggregate([
            {"$lookup":{ "from":"UserCollection","localField":"UserId","foreignField":"_id","as":"UserCollection"}},
            {"$lookup":{ "from":"OrganizationCollection","localField":"UserCollection.OrganizationId","foreignField":"_id","as":"OrganizationCollection"}}, 
            {"$lookup":{ "from":"SurveyCollection","localField":"SurveyId","foreignField":"_id","as":"SurveyCollection"}},{$match :{'UserId': UserId,"SurveyCollection.IsActive":"True",IsSurveyCompleted:"False"}},
            {"$lookup":{ "from":"QuestionCollection","localField":"SurveyId","foreignField":"SurveyId","as":"QuestionCollection"}},
            {"$lookup":{ "from":"RelevanceCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"RelevanceCollection"}},
            {"$lookup":{ "from":"ScaleStaticDynamicCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"ScaleStaticDynamicCollection"}},
            {"$lookup":{ "from":"ListInputsCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"ListInputsCollection"}},
            {"$lookup":{ "from":"MatrixCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"MatrixCollection"}},
            {"$lookup":{ "from":"TextCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"TextCollection"}}

            ]).toArray(function(err, rows) { 
             if (err){
                db.close();
                logger.error("Error in TakeSurvey method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{  
                db.close(); 
                var result= {Status:"Success",
                Data:rows
                 
              };
                return res.json(result);  
            }  
          });
        }
        catch(excb3){
          db.close();
          logger.error("Error in TakeSurvey method:"+excb3.message);
        var result={Status:"Error",
        Data:excb3.message};
        return res.json(result);  
        }
         },
         
       
    ]); 
    }

    }); 

}
catch(ex){
  logger.error("Error in AssignSurveyforUser method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}


}); 

router.get('/GetSurveyQuestionsBy_SurveyId', function(req, res) {
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      } 
      var mongo = require('mongodb');
      var SurveyId = new mongo.ObjectID(req.query.SurveyId);
      var mongo = require('mongodb');
      var UserId = new mongo.ObjectID(req.query.UserId);
      MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in GetSurveyQuestionsBy_SurveyId method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{ 
            var dbo = db.db(Database); 
            dbo.collection("SurveyForTheUserCollection").aggregate([
              {"$lookup":{ "from":"UserCollection","localField":"UserId","foreignField":"_id","as":"UserCollection"}},
              {"$lookup":{ "from":"OrganizationCollection","localField":"UserCollection.OrganizationId","foreignField":"_id","as":"OrganizationCollection"}}, 
              {"$lookup":{ "from":"SurveyCollection","localField":"SurveyId","foreignField":"_id","as":"SurveyCollection"}},{$match :{'UserId': UserId,"SurveyCollection.IsActive":"True",IsSurveyCompleted:"False","SurveyId" : SurveyId}},
              {"$lookup":{ "from":"QuestionCollection","localField":"SurveyId","foreignField":"SurveyId","as":"QuestionCollection"}},
              {"$lookup":{ "from":"RelevanceCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"RelevanceCollection"}},
              {"$lookup":{ "from":"ScaleStaticDynamicCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"ScaleStaticDynamicCollection"}},
              {"$lookup":{ "from":"ListInputsCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"ListInputsCollection"}},
              {"$lookup":{ "from":"MatrixCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"MatrixCollection"}},
              {"$lookup":{ "from":"TextCollection","localField":"QuestionCollection._id","foreignField":"QuestionId","as":"TextCollection"}}
              ]).toArray(function(err, rows) { 
               if (err){
                  db.close();
                  logger.error("Error in GetSurveyQuestionsBy_SurveyId method:"+err.message);
                  var result={Status:"Error",
                  Data:err.message};
                  return res.json(result);
                }  
                else{  
                  db.close(); 
                  var result={Status:"Success",
                  Data:rows 
                };
                  return res.json(result);  
              } 
              
              
            });
    }

    }); 
 
     
  }
  catch(ex){ 
    logger.error("Error in GetSurveyQuestionsBy_SurveyId method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
  }
    
   
  
});

router.post('/SaveSurvey_Response', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in SaveSurvey_Response method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database); 
          var mongo = require('mongodb');
          var SurveyAssignId = new mongo.ObjectID(req.body.SurveyAssignId); 
          var newvalues = { $set:{ SurveyCompletedDate: new Date(), IsSurveyCompleted:"True", Answer: req.body.Answer
            }};  
 
      var myquery={'_id': SurveyAssignId};

      dbo.collection("SurveyForTheUserCollection").updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          logger.error("Error in SaveSurvey_Response method:"+err.message);
            db.close();
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
            db.close();
            var result={Status:"Success",
            Data:"Answer saved successfully.."
           };
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in SaveSurvey_Response method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});
 
router.get('/GetAnswerBy_SurveyandUserId', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in GetAnswerBy_SurveyandUserId method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database); 
      var condition={};
      var mongo = require('mongodb');
      var SurveyId = new mongo.ObjectID(req.query.SurveyId);
      if(req.query.UserId =="" || req.query.UserId==undefined){
        var mongo = require('mongodb');
      var UserId = new mongo.ObjectID(req.query.UserId);
        condition={ $and: [ 
          {SurveyId: {$in: [SurveyId]}}, 
          {Answer: {$nin: [[]]}}]
           }  
      }
      else{
        var mongo = require('mongodb');
        var UserId = new mongo.ObjectID(req.query.UserId);
        condition={ $and: [ 
          {SurveyId: {$in: [SurveyId]}}, 
          {UserId: {$in: [UserId]}},
          {Answer: {$nin: [[]]}}]
           }  
      }
      
       
      dbo.collection("SurveyForTheUserCollection").aggregate([
        {"$lookup":{ "from":"UserCollection","localField":"UserId","foreignField":"_id","as":"UserCollection"}},
        {"$lookup":{ "from":"SurveyCollection","localField":"SurveyId","foreignField":"_id","as":"SurveyCollection"}},
        {"$lookup":{ "from":"OrganizationCollection","localField":"UserCollection.OrganizationId","foreignField":"_id","as":"OrganizationCollection"}},
        {"$lookup":{ "from":"ApplicationGroupCollection","localField":"UserCollection.GroupId","foreignField":"_id","as":"ApplicationGroupCollection"}},
        {$match : condition}
                
      ]).toArray(function(err, rows) { 

        if (err){
          logger.error("Error in GetAnswerBy_SurveyandUserId method:"+err.message);
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
  logger.error("Error in GetAnswerBy_SurveyandUserId method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});


router.post('/SendEmailto_TakeSurvey', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in SendEmailto_TakeSurvey method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var async =require("async"); 
      var surveyData=[];
      console.log("Email request method")
      async.series([
        function(callback) { 
          try{  
            var mongo = require('mongodb');
      var UserId = new mongo.ObjectID(req.body.UserId); 

      var mongo = require('mongodb');
      var SurveyId = new mongo.ObjectID(req.body.SurveyId); 
          dbo.collection("SurveyForTheUserCollection").aggregate([
            {"$lookup":{ "from":"UserCollection","localField":"UserId","foreignField":"_id","as":"UserCollection"}},
            {"$lookup":{ "from":"SurveyCollection","localField":"SurveyId","foreignField":"_id","as":"SurveyCollection"}}, 
            {$match : {"SurveyId":SurveyId,"UserId":UserId,"Answer":[]}}
                    
          ]).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in SendEmailto_TakeSurvey method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{  
                surveyData=rows;  
                if(rows.length==0){ 
                  db.close(); 
                  var result= {Status:"Warning",
                  Data:"No survey records found.."};
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
          logger.error("Error in SendEmailto_TakeSurvey method:"+excb1.message);
        var result= {Status:"Error",
        Data:excb1.message};
        return res.json(result);  
      }
         }, 
         function(callback){
           try{
          var nodemailer = require('nodemailer');
          var EmailTo=surveyData[0].UserCollection[0].Email;
          var SurveyTitle=surveyData[0].SurveyCollection[0].SurveyTitle;
          var Name=surveyData[0].UserCollection[0].Surname;
          var DueDate=surveyData[0].SurveyDueDate;

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: config.Email,
              pass: config.Password,
            }
          });
          
          var mailOptions = {
            from: config.Email,
            to: EmailTo,
            subject: 'Alert for Take survey',
            html: '<p> Hi '+Name+' you did not yet complete the survey "<B>'+SurveyTitle+'</B>". So,please take the survey due date is :'+DueDate+' </p>'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (err) {
              db.close();
              logger.error("Error in SendEmailto_TakeSurvey method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } else { 
              db.close(); 
              var result= {Status:"Success",
              Data:"Email sent successfully"};
              return res.json(result); 
            }
          });
        }
catch(excb2){
      db.close();
      logger.error("Error in SendEmailto_TakeSurvey method:"+excb2.message);
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
  logger.error("Error in SendEmailto_TakeSurvey method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});




  module.exports = router;