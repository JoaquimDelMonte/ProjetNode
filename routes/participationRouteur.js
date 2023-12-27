const { Router } = require("express");
const Participation = require("../models/Participation");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

router.get("/participations", checkAuth, async (req, res, next) => {
  try {
    res.json(
      await Participation.findAll({
        where: { userId: req.userId },
      })
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/participations", checkAuth, async (req, res, next) => {
  try {
    res.status(201).json(await Participation.create(req.body));
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

router.get("/participations/:id", async (req, res, next) => {
  const participation = await Participation.findByPk(parseInt(req.params.id));
  if (participation) {
    res.json(participation);
  } else {
    res.sendStatus(404);
  }
});

router.patch("/participations/:id", checkAuth, async (req, res, next) => {
  try {
    const result = await Participation.update(req.body, {
      where: {
        id: parseInt(req.params.id),
        userId: req.userId,
      },
    });
    if (result[0] === 0) {
      res.sendStatus(404);
    } else {
      res.json(await Participation.findByPk(parseInt(req.params.id)));
    }
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

router.delete("/participations/:id", checkAuth, async (req, res, next) => {
  const result = await Participation.destroy({
    where: {
      id: parseInt(req.params.id),
      userId: req.userId,
    },
  });
  res.sendStatus(result === 0 ? 404 : 204);
});

module.exports = router;
