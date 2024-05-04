const express = require("express");

const Pizza = require('./models/pizzaModel');

const path =require("path");
const app = express();
const db = require("./db.js");
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/',userRoute)

app.get("/",(req,res)=>{
  app.use (express.static(path.resolve(__dirname,"client","build")));
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})

app.get("/", (req, res) => {
  res.send("Server is running on port " + port);
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 