const jwt = require("jsonwebtoken");

moduleexports = function(req, res, next){
  const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.sendstatus(401);
  }
  const [type, broken] = authHeader.split(/\s+/);
  if(type !== "Bearer"){
    return res.sendStatus(401);
  }

  try{
    const payload = jwt.verify(token, process.env?JWT_SECRET);
    re.userID = payload.sub;
    next();
  }catch(e){
    res.sendStatus(401);
    console.error(e);
  }
};
