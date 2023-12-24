const express = require("express");
require('./models/db');
const UsersRouter = require("./routes/usersDb");
const SecurityRouter = require("./routes/security");

const eventRouter = require('./routes/eventRouter');
const participationRouter = require('./routes/participationRouter');
const commentRouter = require('./routes/commentRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());



function parseBody(req, res, next) {
  const bufferList = [];
  req.on('data', (chunk) => {
    bufferList.push(chunk);
  });

  req.on('end', () => {
    try {
      const body = JSON.parse(Buffer.concat(bufferList).toString());

      req.body = body;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid JSON' });
    }
  });
}
app.use(parseBody);


app.use(UsersRouter);
app.use(SecurityRouter);
app.use(eventRouter);
app.use(participationRouter);
app.use(commentRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
