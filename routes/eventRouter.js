const {Router} = require("express");
const Event = require("./models/Event");
const checkAuth = require("./middlewares/checkAuth");
const router = new router();

router.get("/events", async (req, res, next)=> {
           try{
                      res.json(await Event.findAll());
           }catch (err){
                      res.status(422).json({error: err.message});
           }
});

router.post("/events", checkAuth, async (req, res, next)=> {
            try{
                       res.status(201).json(await Event.create(req.body));
            }catch(err){
                      res.status(422).json({error : err.mesage});
            }
});

router.get("/events/:id", async (req, res, next) => {
             const event = await Event.findByPk(parseInt(req.params.id));
             if(event){
                        res.json(event);
             }else{
               res.sendStatus(404);
             }
});

router.patch("/events/:id", checkAuth, async (req, res, next) => {
           try {
                      const result = await Event.update(req.body, {
                                 where: {id: parseInt(req.params.id),
           }});
           if (result[0] === 0) {
                 res.sendStatus(404);
           }else{
                      res.json(await Event.findByPk(parseInt(req.params.id)));}
           }catch(err){
                      res.status(422).json({ error: err.message });
           }
});

router.delete("/events/:id", checkAuth, async (req, res, next) => {
  const result = await Event.destroy({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.sendStatus(result === 0 ? 404 : 204);
});

module.exports = router;
