const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: " ",
  database: "node_crud",
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const date = req.body.date;
 

  db.query(
    "INSERT INTO todo (title, desc, date ) VALUES (?,?,?,?,?)",
    [title,desc,date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});



app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
