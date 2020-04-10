function validatePutMid( req, res, next ) {

  if(!req.body){

      res.status(400).json({message: "missing user data"});
    }
    else {
      if(!req.body.hasOwnProperty('name') && !req.body.hasOwnProperty('description')){
  
        res.status(400).json({message: "missing required name or description field"});
      }
      else{
        next();
      }
    }
}
module.exports = {
  validatePutMid : validatePutMid
}