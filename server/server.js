const express = require("express");
const cors = require("cors");
const videoRouter = require("./routes/video");
const app = express();
//CONTEXT: The process object is a global that provides information about, and control over, the current Node.js process.
// The process.env property returns an object containing the user environment.

require("dotenv").config();
// const PORT = process.env.PORT;

// You have to run dotenv.config to make your .env files available

// Need to include CORS middle ware to allow requests from the client
app.use(
	cors()
	// 	{
	// 	origin: process.env.CLIENT_URL
	// }
);

// Need to include static middleware to be able to serve images from our Express server
app.use(express.static("public"));

//set /video as the path for videoRouter
app.use("/videos", videoRouter);

// Listen on PORT and provide a success callback function
app.listen(process.env.PORT, () => {
	console.log("🚀 Server listening on ", process.env.PORT);
	console.log(process.env.PORT);
});
