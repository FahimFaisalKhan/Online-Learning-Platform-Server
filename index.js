const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const courses = require("./data.json");
app.use(cors());
app.use("/images", express.static("images"));
app.get("/", (req, res) => {
  res.send("Server Working");
});
app.get("/allCourses", (req, res) => {
  res.send(courses);
});
app.get("/:id", (req, res) => {
  const requestedId = parseInt(req.params.id);
  const courseToSend = courses.find((course) => {
    return course.id === requestedId && course;
  });
  res.send(courseToSend);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
