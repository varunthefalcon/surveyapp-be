
/**
* @swagger 
  
* definitions:
 *   Question:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionText:
 *         type: string
 *       IsMandatory:
 *         type: string
 *       IsActive:
 *         type: string
 *       SurveyId:
 *        type: ObjectId
 *       CreatedDate:
 *        type: date
 *       UpdatedDate:
 *        type: date
 *       QuestionOrder:
 *         type: string
 *       RootAnswerType:
 *         type: array
 *       IsSubQuestion:
 *        type: string
 *       ParentId:
 *         type: string
  
  *   Relevance:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionId:
 *         type: ObjectId
 *       Level:
 *         type: string
 *       Options:
 *         type: object
 *       HasChild:
 *        type: string
 *       Label:
 *        type: string
 *       Conditionals:
 *        type: array
 *       PlaceHolder:
 *        type: string 

  *   ScaleStaticDynamic:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionId:
 *         type: ObjectId
 *       Level:
 *         type: string
 *       Options:
 *         type: object
 *       HasChild:
 *        type: string
 *       Label:
 *        type: string
 *       Conditionals:
 *        type: array
 *       PlaceHolder:
 *        type: string 

  
  *   ListInput:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionId:
 *         type: ObjectId
 *       Level:
 *         type: string
 *       SelectionType:
 *         type: string
 *       Options:
 *        type: object
 *       HasChild:
 *        type: string
 *       Label:
 *        type: string
 *       Conditionals:
 *        type: array
 *       PlaceHolder:
 *        type: string 



  *   Matrix:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionId:
 *         type: ObjectId
 *       Level:
 *         type: string
 *       QuestionOption:
 *         type: object
 *       QuestionScaleOption:
 *        type: object
 *       RelevanceOption:
 *        type: object
 *       HasChild:
 *        type: string
 *       Label:
 *        type: string
 *       Conditionals:
 *        type: array
 *       PlaceHolder:
 *        type: string 

 * 
  *   Text:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionId:
 *         type: ObjectId
 *       Level:
 *         type: string
 *       TextBoxType:
 *         type: string
 *       PlaceHolder:
 *        type: string 


* /Question/Create_QuestionCollection:
*   post:
*     tags:
*       - Question
*     name: Question
*     summary: Create a QuestionCollection
*     consumes:
*       - application/json 
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: QuestionCollection created successfully... 



* /Question/Create_Question:
*   post:
*     tags:
*       - Question
*     name: Question
*     summary: Create a Question
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             QuestionText:
*               type: string
*             IsMandatory:
*               type: string
*             IsActive:
*               type: string
*             SurveyId:
*               type: string
*             QuestionOrder:
*               type: string
*             RootAnswerType:
*               type: object
*             IsSubQuestion:
*               type: string
*             ParentId:
*               type: string
*         required:
*           - QuestionText  
*           - IsMandatory
*           - SurveyId
*           - IsActive
*           - QuestionOrder
*           - IsSubQuestion
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... and return QuestionId


* /Question/Update_Question:
*   post:
*     tags:
*       - Question
*     name: Question
*     summary: Update a Question
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
*             QuestionText:
*               type: string
*             IsMandatory:
*               type: string
*             IsActive:
*               type: string
*             SurveyId:
*               type: string
*             QuestionOrder:
*               type: string
*             RootAnswerType:
*               type: object
*             IsSubQuestion:
*               type: string
*             ParentId:
*               type: string                 
*         required:
*           - Id
*           - QuestionText  
*           - IsMandatory
*           - SurveyId
*           - IsActive
*           - QuestionOrder
*           - IsSubQuestion
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... and return QuestionId 


* /Question/Update_RootAnswerType:
*   post:
*     tags:
*       - Question
*     name: Question
*     summary: Update a Question RootAnswerType
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             QuestionId:
*               type: string
*             RootAnswerType:
*               type: string
*                 
*         required:
*           - QuestionId
*           - RootAnswerType
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully...


* /Question/Select_QuestionBy_Id:
*   get:
*     tags:
*       - Question
*     name: Finds a Question
*     summary: Finds a Question 
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
*         description: To select a single Question object 
 

* /Question/List_Question:
*   get:
*     tags:
*       - Question
*     name: Select Question
*     summary: Select entire  Question object
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
*         description: Return entire Question object 

* /Question/Delete_Question:
*   delete:
*     tags:
*       - Question
*     name: Delete Question
*     summary: Delete a Question 
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             SurveyId:
*               type: string
*             QuestionId:
*               type: string
*                 
*         required:
*           - SurveyId
*           - QuestionId  
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*        description: Record deleted successfully.. 

* /Question/Select_QuestionOptionBy_Id:
*   get:
*     tags:
*       - Question
*     name:  Finds a question Option
*     summary: Finds a question Option 
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: query
*         name: Id
*         type: string
*         required: true
*       - in: query
*         name: CollectionName
*         type: string
*         required: true
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*        description: Return question Option  object

* /Question/Create_QuestionOption:
*   post:
*     tags:
*       - Question
*     name: Question
*     summary: Create a Question Option
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             QuestionId:
*               type: string
*             Level:
*               type: string
*             Options:
*               type: object
*             HasChild:
*               type: string
*             SelectionType:
*                type: string
*             QuestionOptions:
*                type: object
*             QuestionScaleOptions:
*                type: object
*             RelevenceOptions:
*                type: object
*             Type:
*                type: string
*             TextBoxType:
*                type: string
*             Label:
*               type: string
*             Conditionals:
*               type: object
*             PlaceHolder:
*               type: string               
*         required:
*           - QuestionId 
*           - Level
*           - Options
*           - HasChild
*           - Type
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: Record inserted successfully... Return question object


* /Question/Update_QuestionOption:
*   post:
*     tags:
*       - Question
*     name: Question
*     summary: Update a Question Option
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             Id:
*                type: string
*             QuestionId:
*               type: string
*             Level:
*               type: string
*             Options:
*               type: object
*             HasChild:
*               type: string
*             SelectionType:
*                type: string
*             QuestionOptions:
*                type: object
*             QuestionScaleOptions:
*                type: object
*             RelevenceOptions:
*                type: object
*             Type:
*                type: string
*             TextBoxType:
*                type: string
*             Label:
*               type: string
*             Conditionals:
*               type: object
*             PlaceHolder:
*               type: string   
*         required:
*           - Id
*           - QuestionId 
*           - Level
*           - Options
*           - HasChild
*           - Type
*       - in: header
*         name: tokenkey
*         type: string
*         required: true 
*     responses:
*       200:
*         description: Record updated successfully... Return question object
 

  */ 

var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url=config.ConnectionStr;
var Database=config.Database;
var logger=require('./logger'); 
 
router.post('/Create_QuestionCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
MongoClient.connect(url, function(err, db) {
  if (err){ 
    logger.error("Error in Create_QuestionCollection method:"+err.message);
    var result= {Status:"Error",
    Data:err.message};
    return res.json(result);
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("QuestionCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_QuestionCollection method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  else{ 
            db.close();
            var result={Status:"Success",
            Data:"QuestionCollection is created successfully.."};
            return res.json(result);
        }
    }); 
  }
 
});
    }
    catch(ex){
        logger.error("Error in Create_QuestionCollection method:"+ex.message);
        var result= {Status:"Error",
        Data:ex.message};
        return res.json(result);  
    }
  });


router.post('/Create_Question', function(req, res) { 
    try{  
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
       MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Create_Question method:"+err.message);
            var result=  {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{   
          var mongo = require('mongodb');  
             var SurveyId = new mongo.ObjectID(req.body.SurveyId);
             var ParentId=""; 
             if(req.body.ParentId!="" && req.body.ParentId!=undefined){
              var mongo = require('mongodb');  
              var ParentId = new mongo.ObjectID(req.body.ParentId);
             }
             var myobj = { QuestionText: req.body.QuestionText, IsMandatory:req.body.IsMandatory, IsActive:req.body.IsActive,
              CreatedDate: new Date(),UpdatedDate: new Date(),SurveyId:SurveyId,QuestionOrder:req.body.QuestionOrder,RootAnswerType:req.body.RootAnswerType,
              IsSubQuestion:req.body.IsSubQuestion,ParentId:ParentId
                };  
          var dbo = db.db(Database);

          dbo.collection("QuestionCollection").insertOne(myobj, function(err, rows) {  
            if (err){ 
              db.close();
                logger.error("Error in Create_Question method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{  
                var mongo = require('mongodb');   
                QuestionId = new mongo.ObjectID(rows.ops[0]._id);   
                db.close();
                var result= {Status:"Success",
                Data:"Record inserted successfully... ",
                QuestionId:QuestionId };
                return res.json(result);
            }  
          });

           }
   }); 
}
catch(ex){
  logger.error("Error in Create_Question method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

router.post('/Update_Question', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Update_Question method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database); 
          var mongo = require('mongodb');
          var SurveyId = new mongo.ObjectID(req.body.SurveyId); 
          var ParentId="";
             if(req.body.ParentId!="" && req.body.ParentId!=undefined){
              var mongo = require('mongodb');  
              var ParentId = new mongo.ObjectID(req.body.ParentId);
             }
          var newvalues = { $set:{ QuestionText: req.body.QuestionText, IsMandatory:req.body.IsMandatory, IsActive: req.body.IsActive,
          SurveyId: SurveyId,QuestionOrder:req.body.QuestionOrder,RootAnswerType:req.body.RootAnswerType,IsSubQuestion:req.body.IsSubQuestion,
          ParentId:ParentId,UpdatedDate: new Date()}};  
      var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.body.Id); 
      var myquery={'_id': o_id};

      dbo.collection("QuestionCollection").updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          logger.error("Error in Update_Question method:"+err.message);
            db.close();
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
            db.close();
            var result= {Status:"Success",
            Data:"Record updated successfully..",
          QuestionId:o_id};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in Update_Question method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

router.post('/Update_RootAnswerType', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){ 
              logger.error("Error in Update_RootAnswerType method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result); 
          } 
          else{
      var dbo = db.db(Database); 
      var newvalues = { $set:{ RootAnswerType: req.body.RootAnswerType}}; 
      var mongo = require('mongodb');
      
      var o_id = new mongo.ObjectID(req.body.QuestionId); 
      var myquery={'_id': o_id};

      dbo.collection("QuestionCollection").updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          db.close(); 
            logger.error("Error in Update_RootAnswerType method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result); 
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
  logger.error("Error in Update_RootAnswerType method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
}); 



router.get('/List_Question', function(req, res) {   
  try{  
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in List_Question method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);   
     dbo.collection("QuestionCollection").aggregate([{"$lookup":{ "from":"RelevanceCollection","localField":"_id","foreignField":"QuestionId","as":"RelevanceList"}}, 
     {"$lookup":{ "from":"ScaleStaticDynamic","localField":"_id","foreignField":"QuestionId","as":"ScaleList"}},
     {"$lookup":{ "from":"ListInputsCollection","localField":"_id","foreignField":"QuestionId","as":"LinstInputList"}},
     {"$lookup":{ "from":"MatrixCollection","localField":"_id","foreignField":"QuestionId","as":"MatrixList"}},
     {"$lookup":{ "from":"TextCollection","localField":"_id","foreignField":"QuestionId","as":"TextCollection"}}
    ]).toArray(function(err, rows) { 
      if (err){
            db.close();
            logger.error("Error in List_Question method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
             
            db.close();
            var result= {Status:"Success", Data:rows}
            res.json(result); 
            
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in List_Question method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

router.get('/Select_QuestionBy_Id', function(req, res) {   
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Select_QuestionBy_Id method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.query.Id);

      var myquery={'_id': o_id};
      
      dbo.collection("QuestionCollection").aggregate([{"$lookup":{ "from":"RelevanceCollection","localField":"_id","foreignField":"QuestionId","as":"RelevanceList"}},{$match : {'_id': o_id}} 
     ,{"$lookup":{ "from":"ScaleStaticDynamic","localField":"_id","foreignField":"QuestionId","as":"ScaleList"}},{$match : {'_id': o_id}},
     {"$lookup":{ "from":"ListInputsCollection","localField":"_id","foreignField":"QuestionId","as":"LinstInputList"}},{$match : {'_id': o_id}},
     {"$lookup":{ "from":"MatrixCollection","localField":"_id","foreignField":"QuestionId","as":"MatrixList"}},{$match : {'_id': o_id}},
     {"$lookup":{ "from":"TextCollection","localField":"_id","foreignField":"QuestionId","as":"TextCollection"}},{$match : {'_id': o_id}}
    ]).toArray(function(err, rows) { 
      if (err){
            db.close();
            logger.error("Error in Select_QuestionBy_Id method:"+err.message);
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
  logger.error("Error in Select_QuestionBy_Id method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);  
}
});

router.delete('/Delete_Question', function(req, res) { 
  try{  
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Delete_Question method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database); 
      var mongo = require('mongodb');
      var SurveyId = new mongo.ObjectID(req.body.SurveyId); 
      var myquery={'SurveyId': SurveyId}; 
      var async =require("async"); 
      async.series([
        function(callback) { 
try{
          dbo.collection("SurveyForTheUserCollection").find(myquery).toArray(function(err, rows) { 
            if (err){
                db.close();
                logger.error("Error in Delete_Question method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);
              }  
              else{  
               if(rows.length > 0){
                db.close(); 
                var result= {Status:"Warning",
                Data:"Cannot delete the question.Because question already assigned survey."};
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
          logger.error("Error in Delete_Question method:"+excb1.message);
        var result={Status:"Error",
        Data:excb1.message};
        return res.json(result);  
        }
         },
        function(callback) {
          try{   
          var mongo = require('mongodb');
          var QuestionId = new mongo.ObjectID(req.body.QuestionId); 
          var myquery={'_id': QuestionId}; 
          var query={'QuestionId': QuestionId};

          const Question = dbo.collection("QuestionCollection").deleteMany( myquery);
          const Relevance = dbo.collection("RelevanceCollection").deleteMany( query);
          const Scale = dbo.collection("ScaleStaticDynamicCollection").deleteMany( query);
          const Matrix = dbo.collection("MatrixCollection").deleteMany( query);
          const List = dbo.collection("ListInputsCollection").deleteMany( query); 
          const Text = dbo.collection("TextCollection").deleteMany( query); 
          Promise.all([Question, Relevance, Scale,Matrix,List,Text]).then(result => {
            db.close();
            var result={Status:"Success",
            Data:"Record deleted successfully.."};
            return res.json(result);

          }).catch(err => {
            db.close();
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          }); 
        }
        catch(excb2){
          db.close();
          logger.error("Error in Delete_Question method:"+excb2.message);
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
  logger.error("Error in Delete_Question method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);  
}
}); 


router.post('/Create_QuestionOption', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
            logger.error("Error in Create_QuestionOption method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);
      var myobj = {};
      var CollectionName="";
      var QuestionId = ""; 
      
      if(req.body.Type=="RelevanceCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
          myobj = { QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,HasChild:req.body.HasChild,
            Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder};  
            CollectionName="RelevanceCollection";
      }
     else if(req.body.Type=="ScaleStaticDynamicCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
          myobj = { QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,HasChild:req.body.HasChild,
            Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder};  
            CollectionName="ScaleStaticDynamicCollection";
      }
      else if(req.body.Type=="ListInputsCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
          myobj = { QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,SelectionType:req.body.SelectionType,
            HasChild:req.body.HasChild,Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder};  
            CollectionName="ListInputsCollection";
      }
      else if(req.body.Type=="MatrixCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
          myobj = { QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,QuestionOptions:req.body.QuestionOptions,
            QuestionScaleOptions:req.body.QuestionScaleOptions,RelevenceOptions:req.body.RelevenceOptions,HasChild:req.body.HasChild,
            Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder};  
            CollectionName="MatrixCollection";
      }
      else if(req.body.Type=="TextCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
          myobj = { QuestionId: QuestionId, Level:req.body.Level, TextBoxType: req.body.TextBoxType,
            Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder};  
            CollectionName="TextCollection";
      }
      
      dbo.collection(CollectionName).insertOne(myobj, function(err, rows) { 
        if (err){
            db.close();
            logger.error("Error in Create_QuestionOption method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
            var mongo = require('mongodb');   
           var Id = new mongo.ObjectID(rows.ops[0]._id);
            db.close();
            var result= {Status:"Success",
            Data:"Record inserted successfully... ",
            FieldType:CollectionName,
            Id:Id,
            QuestionId:QuestionId,

        };
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
logger.error("Error in Create_QuestionOption method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);  
}
});


router.post('/Update_QuestionOption', function(req, res) { 
  try{    
    if (req.headers.tokenkey!=config.tokenkey){
    var result={Status:"Error",
    Data:"Invalid Token key."};
    return res.json(result);
  }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Update_QuestionOptions method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);
      var Id="";
  
      var newvalues = {}; 
      var CollectionName="";
      var QuestionId = "";
      if(req.body.Type=="RelevanceCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
        newvalues ={ $set:{ QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,HasChild:req.body.HasChild,
          Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder}};  
            CollectionName="RelevanceCollection";
      }
     else if(req.body.Type=="ScaleStaticDynamicCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
        newvalues = { $set:{ QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,HasChild:req.body.HasChild,
          Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder}};;  
            CollectionName="ScaleStaticDynamicCollection";
      }
      else if(req.body.Type=="ListInputsCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
        newvalues = { $set:{ QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,SelectionType:req.body.SelectionType,
            HasChild:req.body.HasChild,Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder}};  
            CollectionName="ListInputsCollection";
      }
      else if(req.body.Type=="MatrixCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
        newvalues = { $set:{ QuestionId: QuestionId, Level:req.body.Level, Options: req.body.Options,QuestionOptions:req.body.QuestionOptions,
            QuestionScaleOptions:req.body.QuestionScaleOptions,RelevenceOptions:req.body.RelevenceOptions,HasChild:req.body.HasChild,
            Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder}};  
            CollectionName="MatrixCollection";
      } 
      else if(req.body.Type=="TextCollection"){
        var mongo = require('mongodb'); 
        QuestionId = new mongo.ObjectID(req.body.QuestionId); 
        newvalues ={ $set:{ QuestionId: QuestionId, Level:req.body.Level, TextBoxType: req.body.TextBoxType,
          Label:req.body.Label,Conditionals:req.body.Conditionals,PlaceHolder:req.body.PlaceHolder}};  
            CollectionName="TextCollection";
      }

       
    var mongo = require('mongodb');
      var Id = new mongo.ObjectID(req.body.Id); 
      var myquery={'_id': Id};

      dbo.collection(CollectionName).updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          logger.error("Error in Update_QuestionOptions method:"+err.message);
            db.close();
            var result=  {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{
            db.close();
            var result= {Status:"Success",
            Data:"Record updated successfully..",
            FieldType:CollectionName,
            Id:Id,
            QuestionId:QuestionId};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in Update_QuestionOptions method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);  
}
});


router.get('/Select_QuestionOptionBy_Id', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Select_QuestionOptionBy_Id method:"+err.message);
            var result=  {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);  
      var mongo = require('mongodb');
      var Id = new mongo.ObjectID(req.query.Id); 
      var myquery={'_id': Id}; 
      var CollectionName=req.query.CollectionName;

       dbo.collection(CollectionName).find(myquery).toArray(function(err, rows) { 
        if (err){
          logger.error("Error in Select_QuestionOptionBy_Id method:"+err.message);
            db.close();
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  
          else{ 
            db.close();
            var result= {Status:"Success",
            Data:rows,
            Id:Id,
            CollectionName:CollectionName};
            return res.json(result);
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in Select_QuestionOptionBy_Id method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});


  module.exports = router;