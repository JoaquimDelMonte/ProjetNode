const {Router} = require("express");
const Event = require("./models/Event");
const checkAuth = require("./middlewares/checkAuth");
const router = new router();

router.get("/events, async (req, res, next)=> {
           try{
                      res.json(await Event.findAll());
           }catch (err){
                      res.status(422).json({error: err.message});
           }
});

router.post("/events, checkAuth, async (req, res, next)=> {
            try{
                       res.status(201).json(await Event.create(req.body));
            }catch(err){
                      res.status(422).json({error : err.mesage});
            }
});
