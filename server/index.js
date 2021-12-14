const express = require("express");
const fs = require("fs");
const { networkInterfaces } = require("os");
const app = express();
const { v4: uuid } = require("uuid");

// A helper function to read a data JSON file
const readData = () => {
	// The readFileSync path is relative to where server.js file is
	const videosData = fs.readFileSync("./data/video.json");
	return JSON.parse(videosData);
};

// Fetching a list of games: GET /games
app.get("/videos", (req, res) => {
	const videosData = readData();

	newVideosData = videosData.map((videoData) => {
		// 	// Here we are using a rest parameter to remove some of the keys from the game object, which is common for GET all requests, to return limited data
		// videosDataShort = videosData.map((video) => {
		const {
			description,
			views,
			likes,
			duration,
			video,
			timestamp,
			comments,
			...videoInfo
		} = videoData;
		return videoInfo;
	});

	// });

	// Only single response per request can be sent, it will throw an error otherwise
	res.status(200).json(newVideosData);
});

app.get("/videos/:videoID", (req, res) => {
	const videosData = readData();
	console.log(req.params);
	const video = videosData.find((video) => video.id === req.params.videoID);

	if (!video) {
		return res.status(404).send("Video not found");
	}

	res.status(200).json(video);
});

// Listen on PORT and provide a success callback function
app.listen(8080, () => {
	console.log("🚀 Server listening on 8080");
});
