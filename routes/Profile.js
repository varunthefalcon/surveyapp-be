
/**
* @swagger 

* definitions:
 *   Profile:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       Name:
 *         type: string
 *       Description:
 *         type: string
 *       Address:
 *         type: string
 *       Email:
 *         type: string
 *       Website:
 *        type: string
 *       Phone:
 *        type: string
 *       Logo:
 *        type: string
 *       IsActive:
 *        type: string
 *       CreatedDate:
 *        type: date
 *       NoSoftwareMarketing:
 *        type: string
 *       NoCounselingLaw:
 *        type: string
 *       NoIt:
 *        type: string
 *       ISFocusAnotherCompany:
 *        type: string
 *       Location:
 *        type: string
 *       HouseNo:
 *        type: string
 *       Road:
 *        type: string
 *       ContactPerson:
 *        type: string
 *       IsAcceptPolicy:
 *        type: string
  
 
 
  *   ProfileFile:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       ProfileId:
 *         type: ObjectId
 *       FileName:
 *         type: string
 *       FilePath:
 *         type: string
 *       FileType:
 *         type: string
 * 
  *   SuccessStories:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       ProfileId:
 *         type: ObjectId
 *       Title:
 *         type: string
 *       Description:
 *         type: string
 *       Solution:
 *         type: string
 *       AnswerBy:
 *         type: string
 *       AnswerDate:
 *         type: Date
 * 
  *   UserProfileQuestions:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       QuestionName:
 *         type: string
 *       Conditional:
 *         type: array
 * 
  *   ProfileSelectedAttributeValue:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       ProfileId:
 *         type: string
 *       SubcategoryId:
 *         type: ObjectId
 
  *   SubCategoryCollection:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       CategoryId:
 *         type: string
 *       SubcategoryName:
 *         type: string
 *       ChildName:
 *         type: string
   *   CategoryCollection:
 *     properties:
 *       _id:
 *         type: ObjectId
 *       CategoryName:
 *         type: string

 * 
 * /Profile/Create_ProfileCollection:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Create a ProfileCollection
*     consumes:
*       - application/json 
*     parameters:
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: ProfileCollection created successfully... 



* /Profile/Create_Profile:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Create a Profile
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
*             Description:
*               type: string
*             Email:
*               type: string
*             Website:
*               type: string
*             Phone:
*               type: string
*             Logo:
*               type: string
*             Slogan:
*               type: string
*             IsActive:
*               type: string  
*             NoSoftwareMarketing:
*               type: string   
*             NoCounselingLaw:
*               type: string    
*             NoIt:
*               type: string  
*             ISFocusAnotherCompany:
*               type: string  
*             Location:
*               type: string  
*             HouseNo:
*               type: string  
*             Road:
*               type: string  
*             ContactPerson:
*               type: string  
*             IsAcceptPolicy:
*               type: string   
*         required:
*           - Name  
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... 

* /Profile/Update_Profile:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Update a Profile
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
*             Description:
*               type: string
*             Email:
*               type: string
*             Website:
*               type: string
*             Phone:
*               type: string
*             Logo:
*               type: string
*             Slogan:
*               type: string
*             IsActive:
*               type: string 
*             NoSoftwareMarketing:
*               type: string   
*             NoCounselingLaw:
*               type: string    
*             NoIt:
*               type: string  
*             ISFocusAnotherCompany:
*               type: string  
*             Location:
*               type: string  
*             HouseNo:
*               type: string  
*             Road:
*               type: string  
*             ContactPerson:
*               type: string  
*             IsAcceptPolicy:
*               type: string   

*         required:
*           - Id
*           - Name   
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... 

* /Profile/List_Profile:
*   get:
*     tags:
*       - Profile
*     name: Select Profile
*     summary: Select entire  Profile object
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
*         description: Return entire Profile object 

* /Profile/Select_ProfileBy_Id:
*   get:
*     tags:
*       - Profile
*     name: Finds a Profile
*     summary: Finds a Profile 
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
*         description: To select a single Profile object 
 
   

* /Profile/Delete_Profile:
*   delete:
*     tags:
*       - Profile
*     name: Delete Profile
*     summary: Delete a Profile 
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






* /Profile/Create_ProfileFile:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Create a ProfileFile
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             ProfileId:
*               type: string
*             FileName:
*               type: string
*             FilePath:
*               type: string
*             FileType:
*               type: string
*               
*         required:
*           - ProfileId
*           - FileName
*           - FilePath
*           - FileType
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully... 
 
* /Profile/Update_ProfileFile:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Update a ProfileFile
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
*             ProfileId:
*               type: string
*             FileName:
*               type: string
*             FilePath:
*               type: string
*             FileType:
*               type: string
*               
*         required:
*           - Id
*           - ProfileId
*           - FileName
*           - FilePath
*           - FileType
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... 
 


* /Profile/Select_ProfileFileBy_Id:
*   get:
*     tags:
*       - Profile
*     name: Finds a ProfileFile
*     summary: Finds a ProfileFile 
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
*         description: To select a single ProfileFile object  

* /Profile/Delete_ProfileFile:
*   delete:
*     tags:
*       - Profile
*     name: Delete ProfileFile
*     summary: Delete a ProfileFile 
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
 

* /Profile/Create_SuccessStories:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Create a Success Stories
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             ProfileId:
*               type: string
*             Title:
*               type: string
*             Description:
*               type: string
*             Solution:
*               type: string
*             AnswerBy:
*               type: string
*               
*         required:
*           - ProfileId
*           - Solution
*           - Description
*           - AnswerBy
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully...
 
* /Profile/Update_SuccessStories:
*   post:
*     tags:
*       - Profile
*     name: Profile
*     summary: Update a Success Stories
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
*             ProfileId:
*               type: string
*             Title:
*               type: string
*             Description:
*               type: string
*             Solution:
*               type: string
*             AnswerBy:
*               type: string
*               
*         required:
*           - Id
*           - ProfileId
*           - Solution
*           - Description
*           - AnswerBy
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully... 

* /Profile/Select_SuccessStoriesBy_Id:
*   get:
*     tags:
*       - Profile
*     name: Finds a Success Stories
*     summary: Finds a Success Stories 
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
*         description: To select a single Success Storie object 
 
 
* /Profile/Delete_SuccessStories:
*   delete:
*     tags:
*       - Profile
*     name: Delete Success Storie
*     summary: Delete a Success Storie 
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


* /Profile/Create_ProfileSelected_AttributeValue:
*   post:
*     tags:
*       - Profile
*     name: Create a Profile Selected Attribute Value
*     summary: Create a Profile Selected Attribute Value
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             ProfileId:
*               type: string
*             SubcategoryId:
*               type: string
*               
*         required:
*           - ProfileId
*           - SubcategoryId
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully...

* /Profile/Delete_ProfileSelected_AttributeValue:
*   delete:
*     tags:
*       - Profile
*     name: Delete Profile Selected Attribute Value
*     summary:  Delete Profile Selected Attribute Value 
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
 
* /Profile/List_Category:
*   get:
*     tags:
*       - Profile
*     name: Select Category and subcategory list
*     summary: Select Category and subcategory list
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
*         description: Return entire Category and subcategory object 

* /Profile/List_UserProfileQuestions:
*   get:
*     tags:
*       - Profile
*     name: Select User Profile Questions list
*     summary: Select User Profile Questions list
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
*         description: Return entire  User Profile Questions list object 





* /Profile/Create_CompanyProfile:
*   post:
*     tags:
*       - Profile
*     name: Create a Company Profile
*     summary: Create a Company Profile
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
*             Answer:
*               type: object
*             URL:
*               type: string
*               
*         required:
*           - Email
*           - Answer
*           - URL
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record inserted successfully...


* /Profile/Update_CompanyProfile:
*   post:
*     tags:
*       - Profile
*     name: Update a Company Profile
*     summary: Update a Company Profile
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
*             Answer:
*               type: object
*         required:
*           - Email
*           - Answer
*       - in: header
*         name: tokenkey
*         type: string
*         required: true
*     responses:
*       200:
*         description: Record updated successfully...
 

* /Profile/Select_CompanyProfile:
*   get:
*     tags:
*       - Profile
*     name: Select Company Profile
*     summary: Select Company Profile
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
*         name: Email
*         type: string
*         required: true
*       - in: query
*         name: Password
*         type: string
*         required: true

*     responses:
*       200:
*         description: Return Company Profile object 

 */ 




var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url=config.ConnectionStr;
var Database=config.Database;
var logger=require('./logger'); 

router.post('/Create_ProfileCollection', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
MongoClient.connect(url, function(err, db) {
  if (err){ 
    logger.error("Error in Create_ProfileCollection method:"+err.message);
    var result={Status:"Error",
    Data:err.message};
    return res.json(result);
  }  else{
    var dbo = db.db(Database);
    dbo.createCollection("ProfileCollection",{autoIndexId : true}, function(err, rows) {
        if (err){
            db.close();
            logger.error("Error in Create_ProfileCollection method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          }  else{
             db.close();
            var result={Status:"Success",
            Data:"ProfileCollection is created successfully.."};
            return res.json(result);
        }
    }); 
  }
 
});
    }
    catch(ex){
        logger.error("Error in Create_ProfileCollection method:"+ex.message);
        var result={Status:"Error",
        Data:ex.message};
        return res.json(result);  
    }
  });


  router.post('/Create_Profile', function(req, res) { 
      try{  
        if (req.headers.tokenkey!=config.tokenkey){
          var result= {Status:"Error",
          Data:"Invalid Token key."};
          return res.json(result);
        } 
        MongoClient.connect(url, function(err, db) {
            if (err){ 
                logger.error("Error in Create_Profile method:"+err.message);
                var result= {Status:"Error",
                Data:err.message};
                return res.json(result); 
              } 
              else{
          var dbo = db.db(Database); 
          var mongo = require('mongodb'); 
          
          var myobj = { Name:req.body.Name,Description:req.body.Description,Address:req.body.Address,Email:req.body.Email,
            Website:req.body.Website,Phone:req.body.Phone,Logo:req.body.Logo,Slogan:req.body.Slogan,
          CreatedDate:new Date(),IsActive:req.body.IsActive,NoSoftwareMarketing:req.body.NoSoftwareMarketing,
          NoCounselingLaw:req.body.NoCounselingLaw,NoIt:req.body.NoIt,ISFocusAnotherCompany:req.body.ISFocusAnotherCompany,
          Location:req.body.Location,HouseNo:req.body.HouseNo,Road:req.body.Road,ContactPerson:req.body.ContactPerson,
          IsAcceptPolicy:req.body.IsAcceptPolicy}; 
          dbo.collection("ProfileCollection").insertOne(myobj, function(err, rows) { 
            if (err){
                db.close();  
                  logger.error("Error in Create_Profile method:"+err.message);
                  var result=  {Status:"Error",
                  Data:err.message};
                  return res.json(result); 
              }  
              else{
                var mongo = require('mongodb');   
                var Id = new mongo.ObjectID(rows.ops[0]._id);
                db.close();
                var result={Status:"Success",
                Data:"Record inserted successfully... ",
                Id:Id};
                return res.json(result);
            }  
          });
        }

        }); 
    
}
catch(ex){
    logger.error("Error in Create_Profile method:"+ex.message);
    var result= {Status:"Error",
    Data:ex.message};
    return res.json(result);  
}
  });

router.post('/Update_Profile', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){ 
              logger.error("Error in Update_Profile method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result); 
            } 
            else{
        var dbo = db.db(Database);  
        var newvalues ={ $set:{ Name:req.body.Name,Description:req.body.Description,Address:req.body.Address,Email:req.body.Email,
            Website:req.body.Website,Phone:req.body.Phone,Logo:req.body.Logo,Slogan:req.body.Slogan,
            IsActive:req.body.IsActive,NoSoftwareMarketing:req.body.NoSoftwareMarketing,
            NoCounselingLaw:req.body.NoCounselingLaw,NoIt:req.body.NoIt,ISFocusAnotherCompany:req.body.ISFocusAnotherCompany,
            Location:req.body.Location,HouseNo:req.body.HouseNo,Road:req.body.Road,ContactPerson:req.body.ContactPerson,
            IsAcceptPolicy:req.body.IsAcceptPolicy}};  
       var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.body.Id); 
        var myquery={'_id': o_id}; 
        dbo.collection("ProfileCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close(); 
              logger.error("Error in Update_Profile method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result); 
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
    logger.error("Error in Update_Profile method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

 
router.get('/List_Profile', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in List_Profile method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);
        dbo.collection("ProfileCollection").aggregate([
              {"$lookup":{ "from":"ProfileFileCollection","localField":"_id","foreignField":"ProfileId","as":"ProfileFileCollection"}},
              {"$lookup":{ "from":"SuccessStoriesCollection","localField":"_id","foreignField":"ProfileId","as":"SuccessStoriesCollection"}},
              {"$lookup":{ "from":"ProfileSelectedAttributeValue","localField":"_id","foreignField":"ProfileId","as":"ProfileSelectedAttributeValue"}},
              {"$lookup":{ "from":"SubCategoryCollectionGe","localField":"ProfileSelectedAttributeValue.SubcategoryId","foreignField":"_id","as":"SubCategoryCollection"}},
              {"$lookup":{ "from":"CategoryCollectionGe","localField":"SubCategoryCollection.CategoryId","foreignField":"_id","as":"CategoryCollection"}}
             
               
            ]).toArray(function(err, rows) { 
          if (err){
              db.close();
              logger.error("Error in List_Profile method:"+err.message);
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
    logger.error("Error in List_Profile method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

 
router.get('/Select_ProfileBy_Id', function(req, res) { 
    try{ 
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }  
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Select_ProfileBy_Id method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};

              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);  
        var mongo = require('mongodb');
        var Id = new mongo.ObjectID(req.query.Id);  
        dbo.collection("ProfileCollection").aggregate([
            {"$lookup":{ "from":"ProfileFileCollection","localField":"_id","foreignField":"ProfileId","as":"ProfileFileCollection"}},{$match :{'_id': Id}}, 
            {"$lookup":{ "from":"SuccessStoriesCollection","localField":"_id","foreignField":"ProfileId","as":"SuccessStoriesCollection"}},
            {"$lookup":{ "from":"ProfileSelectedAttributeValue","localField":"_id","foreignField":"ProfileId","as":"ProfileSelectedAttributeValue"}},
            {"$lookup":{ "from":"SubCategoryCollectionGe","localField":"ProfileSelectedAttributeValue.SubcategoryId","foreignField":"_id","as":"SubCategoryCollection"}},
            {"$lookup":{ "from":"CategoryCollectionGe","localField":"SubCategoryCollection.CategoryId","foreignField":"_id","as":"CategoryCollection"}}
           
         ]).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Select_ProfileBy_Id method:"+err.message);
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
    logger.error("Error in Select_ProfileBy_Id method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
}); 
router.delete('/Delete_Profile', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Delete_Profile method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);   
         var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id); 
        var myquery={'_id': o_id}; 
            dbo.collection("ProfileCollection").deleteMany( myquery,function(err, rows) { 
              if (err){
                logger.error("Error in Delete_Profile method:"+err.message);
                  db.close();
                  var result={Status:"Error",
                  Data:err.message};
                  return res.json(result);
                }  
                else{ 
            var myquery={'ProfileId': o_id};
            const File = dbo.collection("ProfileFileCollection").deleteMany( myquery);
            const Stories = dbo.collection("SuccessStoriesCollection").deleteMany( myquery);
                  db.close();
                  var result=  {Status:"Success",
                  Data:"Record deleted successfully.."};
                  return res.json(result);
              }  
            });
          }
           
         
      });
  }
  catch(ex){
    logger.error("Error in Delete_Profile method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);;  
  }
  }); 

  router.post('/Create_ProfileFile', function(req, res) { 
      try{   
        if (req.headers.tokenkey!=config.tokenkey){
          var result={Status:"Error",
          Data:"Invalid Token key."};
          return res.json(result);;
        }
        MongoClient.connect(url, function(err, db) {
            if (err){ 
                logger.error("Error in Create_ProfileFile method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);; 
              } 
              else{ 
               var mongo = require('mongodb');
               var ProfileId = new mongo.ObjectID(req.body.ProfileId);  
          var dbo = db.db(Database); 
          var myobj = { ProfileId:ProfileId,FileName: req.body.FileName, FilePath:req.body.FilePath, FileType: req.body.FileType };  
          dbo.collection("ProfileFileCollection").insertOne(myobj, function(err, rows) { 
            if (err){
              db.close(); 
                logger.error("Error in Create_ProfileFile method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result); 
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
    logger.error("Error in Create_ProfileFile method:"+ex.message);
    var result={Status:"Error",
    Data:ex.message};
    return res.json(result);;  
}
  }); 
  
router.post('/Update_ProfileFile', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      } 
      MongoClient.connect(url, function(err, db) {
          if (err){ 
                logger.error("Error in Update_ProfileFile method:"+err.message);
                var result={Status:"Error",
                Data:err.message};
                return res.json(result);; 
            } 
            else{
        var dbo = db.db(Database); 
        var mongo = require('mongodb');
        var ProfileId = new mongo.ObjectID(req.body.ProfileId); 
        var newvalues ={ $set:{ ProfileId:ProfileId,FileName: req.body.FileName, FilePath:req.body.FilePath, FileType: req.body.FileType }}; 
        var mongo = require('mongodb');
        
        var o_id = new mongo.ObjectID(req.body.Id); 
        var myquery={'_id': o_id};

        dbo.collection("ProfileFileCollection").updateOne(myquery,newvalues, function(err, rows) { 
          if (err){
            db.close(); 
              logger.error("Error in Update_ProfileFile method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result); 
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
    logger.error("Error in Update_ProfileFile method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);
}
}); 

router.get('/Select_ProfileFileBy_Id', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result= {Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      } 
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in Select_ProfileFileBy_Id method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);;
            } 
            else{
        var dbo = db.db(Database);  
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id); 
        var myquery={'_id': o_id}; 
         dbo.collection("ProfileFileCollection").find(myquery).toArray(function(err, rows) { 
          if (err){
            logger.error("Error in Select_ProfileFileBy_Id method:"+err.message);
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
    logger.error("Error in Select_ProfileFileBy_Id method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);;  
}
});


router.delete('/Delete_ProfileFile', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Delete_ProfileFile method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);   
          var mongo = require('mongodb');
          var o_id = new mongo.ObjectID(req.query.Id); 
          var myquery={'_id': o_id};
          dbo.collection("ProfileFileCollection").deleteMany( myquery,function(err, rows) {  
            if (err){
                db.close();
                logger.error("Error in Delete_ProfileFile method:"+err.message);
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

    }); 

}
catch(ex){
  logger.error("Error in Delete_ProfileFile method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);;  
}
}); 



router.post('/Create_SuccessStories', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);;
      }
      MongoClient.connect(url, function(err, db) {
          if (err){ 
              logger.error("Error in Create_SuccessStories method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);; 
            } 
            else{ 
        var dbo = db.db(Database); 
        var mongo = require('mongodb');
        var ProfileId = new mongo.ObjectID(req.body.ProfileId);  
        var myobj = { ProfileId: ProfileId, Title:req.body.Title, Description: req.body.Description,
            Solution: req.body.Solution,AnswerBy: req.body.AnswerBy,AnswerDate: new Date() };  
        dbo.collection("SuccessStoriesCollection").insertOne(myobj, function(err, rows) { 
          if (err){
            db.close(); 
              logger.error("Error in Create_SuccessStories method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result); 
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
  logger.error("Error in Create_SuccessStories method:"+ex.message);
  var result={Status:"Error",
  Data:ex.message};
  return res.json(result);;  
}
}); 

router.post('/Update_SuccessStories', function(req, res) { 
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
              logger.error("Error in Update_SuccessStories method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);; 
          } 
          else{
      var dbo = db.db(Database); 
      var mongo = require('mongodb');
      var ProfileId = new mongo.ObjectID(req.body.ProfileId); 
      var newvalues = { $set:{ ProfileId: ProfileId, Title:req.body.Title, Description: req.body.Description,
        Solution: req.body.Solution,AnswerBy: req.body.AnswerBy }}; 
      var mongo = require('mongodb');
      
      var o_id = new mongo.ObjectID(req.body.Id); 
      var myquery={'_id': o_id};

      dbo.collection("SuccessStoriesCollection").updateOne(myquery,newvalues, function(err, rows) { 
        if (err){
          db.close(); 
            logger.error("Error in Update_SuccessStories method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result); 
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
  logger.error("Error in Update_SuccessStories method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);
}
}); 

router.get('/Select_SuccessStoriesBy_Id', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);;
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Select_SuccessStoriesBy_Id method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);;
          } 
          else{
      var dbo = db.db(Database);  
      var mongo = require('mongodb');
      var o_id = new mongo.ObjectID(req.query.Id); 
      var myquery={'_id': o_id}; 
       dbo.collection("SuccessStoriesCollection").find(myquery).toArray(function(err, rows) { 
        if (err){
          logger.error("Error in Select_SuccessStoriesBy_Id method:"+err.message);
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
  logger.error("Error in Select_SuccessStoriesBy_Id method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);;  
}
});


router.delete('/Delete_SuccessStories', function(req, res) { 
try{   
  if (req.headers.tokenkey!=config.tokenkey){
    var result={Status:"Error",
    Data:"Invalid Token key."};
    return res.json(result);
  }
  MongoClient.connect(url, function(err, db) {
      if (err){
        logger.error("Error in Delete_SuccessStories method:"+err.message);
          var result= {Status:"Error",
          Data:err.message};
          return res.json(result);
        } 
        else{
    var dbo = db.db(Database);   
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(req.query.Id); 
        var myquery={'_id': o_id};
        dbo.collection("SuccessStoriesCollection").deleteMany( myquery,function(err, rows) {  
          if (err){
              db.close();
              logger.error("Error in Delete_SuccessStories method:"+err.message);
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

  }); 

}
catch(ex){
logger.error("Error in Delete_SuccessStories method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);;  
}
}); 


router.post('/Create_ProfileSelected_AttributeValue', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);;
    }
    MongoClient.connect(url, function(err, db) {
        if (err){ 
            logger.error("Error in Create_ProfileSelected_AttributeValue method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);; 
          } 
          else{  
      var dbo = db.db(Database); 
      var mongo = require('mongodb');
      var ProfileId = new mongo.ObjectID(req.body.ProfileId); 
      var SubcategoryId = new mongo.ObjectID(req.body.SubcategoryId);  
      var myobj = { ProfileId: ProfileId, SubcategoryId: SubcategoryId };  
      dbo.collection("ProfileSelectedAttributeValue").insertOne(myobj, function(err, rows) { 
        if (err){
          db.close(); 
            logger.error("Error in Create_ProfileSelected_AttributeValue method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result); 
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
logger.error("Error in Create_ProfileSelected_AttributeValue method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);;  
}
});

router.delete('/Delete_ProfileSelected_AttributeValue', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Delete_ProfileSelected_AttributeValue method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);   
          var mongo = require('mongodb');
          var o_id = new mongo.ObjectID(req.query.Id); 
          var myquery={'_id': o_id};
          dbo.collection("ProfileSelectedAttributeValue").deleteMany( myquery,function(err, rows) {  
            if (err){
                db.close();
                logger.error("Error in Delete_ProfileSelected_AttributeValue method:"+err.message);
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
  
    }); 
  
  }
  catch(ex){
  logger.error("Error in Delete_ProfileSelected_AttributeValue method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);;  
  }
  }); 


  router.get('/List_Category', function(req, res) { 
    try{   
      if (req.headers.tokenkey!=config.tokenkey){
        var result={Status:"Error",
        Data:"Invalid Token key."};
        return res.json(result);
      }
      MongoClient.connect(url, function(err, db) {
          if (err){
            logger.error("Error in List_Category method:"+err.message);
              var result={Status:"Error",
              Data:err.message};
              return res.json(result);
            } 
            else{
        var dbo = db.db(Database);
        var CategoryQuestion=[];
        var ProfileQuestions=[];
        var arraylist=[];
        var async =require("async");
        async.series([
          
       function(callback) { 
            try{
        dbo.collection("CategoryCollectionGe").aggregate([
              {"$lookup":{ "from":"SubCategoryCollectionGe","localField":"_id","foreignField":"CategoryId","as":"SubCategoryCollection"}} 
               ]).toArray(function(err, rows) { 
          if (err){
              db.close();
              logger.error("Error in List_Category method:"+err.message);
              var result= {Status:"Error",
              Data:err.message};
              return res.json(result);
            }  
            else{  
              for(i=0;i<rows.length;i++){ 
                var subcategory=rows[i].SubCategoryCollection;
                var options=[];
                var subcategorylist=[];
                for(j=0; j<subcategory.length; j++){ 
                    if(subcategory[j].ChildName==""){ 
                      var opt=[];
                        opt.push({_id:subcategory[j]._id,Label:subcategory[j].SubCategoryName});
                     var sublist={_id:subcategory[j]._id,CategoryId:subcategory[j].CategoryId,Type:subcategory[j].Type,
                     Label:subcategory[j].SubCategoryName,Options:opt}
                     subcategorylist.push(sublist); 
                    }
                      else{  
                        if(j==0){
                          options.push({_id:subcategory[j]._id,Label:subcategory[j].ChildName}); 
                        }
                        else{ 
                         if(subcategory[j].SubCategoryName ==subcategory[j-1].SubCategoryName) {  // same category
                          options.push({_id:subcategory[j]._id,Label:subcategory[j].ChildName});
                          if(subcategory.length-1 != j){ 
                           if(subcategory[j].SubCategoryName !=subcategory[j+1].SubCategoryName) {
                             subcategorylist.push({_id:subcategory[j]._id,CategoryId:subcategory[j].CategoryId,Type:subcategory[j].Type,
                             Label:subcategory[j-1].SubCategoryName,Options:options});
                             options=[];
                           }
                           
                          }
                          else{
                            subcategorylist.push({_id:subcategory[j]._id,CategoryId:subcategory[j].CategoryId,Type:subcategory[j].Type,
                            Label:subcategory[j-1].SubCategoryName,Options:options});
                            options=[];
                          }
                         }
                         else if(subcategory[j].SubCategoryName !=subcategory[j-1].SubCategoryName){   // different  category
                         options.push({_id:subcategory[j]._id,Label:subcategory[j].ChildName});
                         }  
                        }
                                            
                      }
                          
                  } // subcategory end loop
                  var maincategory={_id:rows[i]._id,CategoryName:rows[i].CategoryName,SortOrder:rows[i].SortOrder,
                    Conditionals:rows[i].Conditionals, SubCategoryCollection:subcategorylist};
                    arraylist.push(maincategory); 
              } 
            callback();
          }  


        });


      }
      catch(excb1){
        db.close();
          logger.error("Error in List_Category method:"+excb1.message);
        var result= {Status:"Error",
        Data:excb1.message};
        return res.json(result);  
      }
        },

      function(callback) { 
        try{
          dbo.collection("ProfileQuestions").find({}).toArray(function(err, rows) { 
              if (err){
          db.close();
          logger.error("Error in List_Category method:"+err.message);
          var result= {Status:"Error",
          Data:err.message};
          return res.json(result);
        }  
        else{   
        ProfileQuestions=rows;
        
        callback();
      }  


    });


  }
  catch(excb2){
    db.close();
      logger.error("Error in List_Category method:"+excb2.message);
    var result= {Status:"Error",
    Data:excb2.message};
    return res.json(result);  
  }
       },

      function(callback) { 
    try{
      dbo.collection("UserProfileQuestionsGe").find({}).toArray(function(err, rows) { 
       if (err){
      db.close();
      logger.error("Error in List_Category method:"+err.message);
      var result= {Status:"Error",
      Data:err.message};
      return res.json(result);
    }  
    else{   
      CategoryQuestion=rows;
    db.close();
    var result= {Status:"Success",
     CategoryList:arraylist,
     CategoryQuestion:CategoryQuestion,
     ProfileQuestions:ProfileQuestions,
     };

      return res.json(result);  
  }  


});


}
catch(excb3){
  db.close();
  logger.error("Error in List_Category method:"+excb3.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
       },
  
        ]);
      }
      }); 
  
}
catch(ex){
    logger.error("Error in List_Category method:"+ex.message);
  var result= {Status:"Error",
  Data:ex.message};
  return res.json(result);  
}
});

router.get('/List_UserProfileQuestions', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);
    }
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in List_UserProfileQuestions method:"+err.message);
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);
          } 
          else{
      var dbo = db.db(Database);
      dbo.collection("UserProfileQuestionsGe").find({}).toArray(function(err, rows) { 
        if (err){
            db.close();
            logger.error("Error in List_UserProfileQuestions method:"+err.message);
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
  logger.error("Error in List_UserProfileQuestions method:"+ex.message);
var result= {Status:"Error",
Data:ex.message};
return res.json(result);  
}
});



router.post('/Create_CompanyProfile', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);;
    }
    var async =require("async");
    var Password="";
    var random =require('random-key-generator');
      var Password=random(8);
        async.series([ 
          function(callback) {
            try{
             MongoClient.connect(url, function(err, db) {
               if (err){ 
                   logger.error("Error in Create_CompanyProfile method:"+err.message);
                   var result={Status:"Error",
                   Data:err.message};
                   return res.json(result);; 
                 } 
                 else{ 
             var dbo = db.db(Database); 
               dbo.collection("CompanyProfileCollection").find({'Email': req.body.Email}).toArray(function(err, rows) { 
                if (err){
                 db.close(); 
                   logger.error("Error in Create_CompanyProfile method:"+err.message);
                   var result={Status:"Error",
                   Data:err.message};
                   return res.json(result); 
                 }  
                 else{
                   db.close();
                   if (rows.length > 0){
                    var result={Status:"Error",
                    Data:"Email id already exist..."};
                    return res.json(result);;
                   }else{
                     callback();
                   }
                  
               }  
             });
           }
       
           }); 
           }
           catch(excb3){
             logger.error("Error in Create_CompanyProfile method:"+excb3.message);
             var result={Status:"Error",
             Data:excb3.message};
             return res.json(result);;  
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
             subject: 'Profile Registration',
             html: '<p>Profile registration is completed.Your password is: </B> '+Password+' </B>.</br> Do you want login <a href="'+req.body.URL+'">click here</a>.</p>'
           };
           
           transporter.sendMail(mailOptions, function(error, info){
             if (error) {
               db.close();
               logger.error("Error in Create_CompanyProfile method:"+error.message);
               var result= {Status:"Error",
               Data:error.message};
               return res.json(result);
             } else {
                callback();
             }
           });
         }
 catch(excb1){
       db.close();
       logger.error("Error in Create_CompanyProfile method:"+excb1.message);
       var result={Status:"Error",
       Data:excb1.message};
       return res.json(result);  
 }
          },
       function(callback) {
           try{
            MongoClient.connect(url, function(err, db) {
              if (err){ 
                  logger.error("Error in Create_CompanyProfile method:"+err.message);
                  var result={Status:"Error",
                  Data:err.message};
                  return res.json(result);; 
                } 
                else{ 
            var dbo = db.db(Database); 
             var myobj = { Email:req.body.Email, Password:Password, Answer: req.body.Answer};  
            dbo.collection("CompanyProfileCollection").insertOne(myobj, function(err, rows) { 
              if (err){
                db.close(); 
                  logger.error("Error in Create_CompanyProfile method:"+err.message);
                  var result={Status:"Error",
                  Data:err.message};
                  return res.json(result); 
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
          catch(excb2){
            logger.error("Error in Create_CompanyProfile method:"+excb2.message);
            var result={Status:"Error",
            Data:excb2.message};
            return res.json(result);;  
            }
            
      
      },
        ]);
   

}
catch(ex){
logger.error("Error in Create_CompanyProfile method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);;  
}
});


router.post('/Update_CompanyProfile', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result={Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);;
    }   
    MongoClient.connect(url, function(err, db) {
      if (err){ 
          logger.error("Error in Update_CompanyProfile method:"+err.message);
          var result={Status:"Error",
          Data:err.message};
          return res.json(result);; 
        } 
        else{ 
    var dbo = db.db(Database); 
        var newvalues = { $set:{ Answer: req.body.Answer }};  
        var myquery={'Email': req.body.Email};   
    dbo.collection("CompanyProfileCollection").updateOne(myquery,newvalues,function(err, rows) {
      if (err){
        db.close(); 
          logger.error("Error in Update_CompanyProfile method:"+err.message);
          var result={Status:"Error",
          Data:err.message};
          return res.json(result); 
        }  
        else{
          db.close();
          var result={Status:"Success",
          Data:"Record updated successfully..."};
          return res.json(result);;
      }  
    });
  }

  }); 

}
catch(ex){
logger.error("Error in Update_CompanyProfile method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);;  
}
});

router.get('/Select_CompanyProfile', function(req, res) { 
  try{   
    if (req.headers.tokenkey!=config.tokenkey){
      var result= {Status:"Error",
      Data:"Invalid Token key."};
      return res.json(result);;
    } 
    MongoClient.connect(url, function(err, db) {
        if (err){
          logger.error("Error in Select_CompanyProfile method:"+err.message);
            var result= {Status:"Error",
            Data:err.message};
            return res.json(result);;
          } 
          else{
      var dbo = db.db(Database);    
      dbo.collection("CompanyProfileCollection").find({$and: [{'Email': req.query.Email},{"Password":req.query.Password}]}).toArray(function(err, rows) { 
        if (err){
          logger.error("Error in Select_CompanyProfile method:"+err.message);
            db.close();
            var result={Status:"Error",
            Data:err.message};
            return res.json(result);;
          }  
          else{ 
            db.close();
            if(rows.length > 0){
              var result={Status:"Success",
              Data:rows};
              return res.json(result);
            }
            else{
              var result={Status:"Error",
              Data:"Invalid User"};
              return res.json(result);
            }
          
        }  
      });
    }

    }); 

}
catch(ex){
  logger.error("Error in Select_CompanyProfile method:"+ex.message);
var result={Status:"Error",
Data:ex.message};
return res.json(result);;  
}
});
  module.exports = router;
