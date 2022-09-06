const express = require("express");
const cors = require('cors') // This is new
const app = express();
    
require("./server/config/mongoose.config");
    
app.use(cors()) // This is new
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyRoutes = require("./server/routes/pet.routes");
AllMyRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));