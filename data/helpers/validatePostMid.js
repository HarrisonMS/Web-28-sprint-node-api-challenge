function validatePostMid(req, res, next) {
  if (!req.body) {
    res.status(400).json({message: 'can not find post data'})
  }else if (!req.body.name) {
    res.status(400).json({message: 'name required buddy'})
  }else if (!req.body.description){
    res.status(400).json({message: 'description is needed bud'})
  }else{
    // req.body.user_id = req.user.id;
    next()
  }
}

module.exports = {
  validatePostMid : validatePostMid
}

