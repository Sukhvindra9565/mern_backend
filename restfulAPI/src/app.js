const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student")

app.use(express.json());
app.use(studentRouter);



app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
// http://localhost:8000
