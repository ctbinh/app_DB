const express = require('express')
const cors = require("cors")

const app = express();

const router = require('./routers');

app.use('/user', router.user);
app.use('/course', router.course);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send('<h1>Hello</h1>')
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});