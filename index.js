const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const courses = require("./data.json");
app.use(cors());

//configuring static files
app.use("/images", express.static("images"));
app.get("/", (req, res) => {
  res.send("Server Working");
});

//Get all course data
app.get("/allCourses", (req, res) => {
  res.send(courses);
});

// get a specific course data
app.get("/:id", (req, res) => {
  const requestedId = +req.params.id;
  const courseToSend = courses.find((course) => {
    return course.id === requestedId && course;
  });
  res.send(courseToSend);
});

// Start the app with following message
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
