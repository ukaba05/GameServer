var express = require("express");
var server = express();

var bodyParser = require("body-parser");
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

const Database = require("nedb-promises");
var scoreDB = Database.create(__dirname + "/score.db");

server.post("/getRank", async (req, res) => {
    console.log("get rank");
    try {
        const scores = await scoreDB.find({}).sort({ score: -1 }).limit(5);
        res.send(scores);
    } catch (error) {
        console.error("Error fetching scores:", error);
        res.status(500).send("Internal Server Error");
    }
});

 server.post("/postScore", async (req,res)=>{
      console.log("post score");
      await scoreDB.insert(req.body)
      res.send("Score posted successfully");
 });
 
server.listen(8080, () =>{
  console.log("Server is running on port 80");
});
