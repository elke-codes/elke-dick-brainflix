const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");

// A helper function to read a data JSON file
const readData = () => {
	// The readFileSync path is relative to where server.js file is
	const videosData = fs.readFileSync("./data/videos.json");
	return JSON.parse(videosData);
};

// A helper function that writes the data to JSON file
const writeFile = (videosData) => {
	// JSON.stringify takes additional parameters, that allow us to specify the amounts of white space (ie, indentation) in the file
	fs.writeFileSync("./data/videos.json", JSON.stringify(videosData, null, 2));
};

//be able to send json body when post
router.use(express.json());

// get a list of videos: GET /video
router.get("/", (req, res) => {
	const videosData = readData();

	newVideosData = videosData.map((videoDataShort) => {
		// 	// Here we are using a rest parameter to remove some of the keys from the game object, which is common for GET all requests, to return limited data
		// videosDataShort = videosData.map((video) => {
		let {
			description,
			views,
			likes,
			duration,
			video,
			timestamp,
			comments,
			...videoInfo
		} = videoDataShort;
		return videoInfo;
	});

	// });

	// Only single response per request can be sent, it will throw an error otherwise
	res.status(200).json(newVideosData);
});

router.get("/:videoID", (req, res) => {
	const videosData = readData();
	// console.log(req.params);
	const video = videosData.find((video) => video.id === req.params.videoID);

	if (!video) {
		return res.status(404).send("Video not found");
	}

	res.status(200).json(video);
});

router.post("/", (req, res) => {
	//get the most up to date data
	const videosData = readData();
	console.log("got recent data");
	console.log("req body title", req.body);

	// It's a good idea to setup validation for your endpoints to make sure the data required is sent in a request
	if (
		!req.body.title ||
		// !req.body.channel ||
		// !req.body.image ||

		!req.body.description
	) {
		return res
			.status(400)
			.send(
				"Please make sure to include title,  and description of the video"
			);
	}

	// We create IDs on a server, so it's not going to be a part of a request, rather we can use uuid or similar library to generate the new id
	const newVideo = {
		title: req.body.title,
		channel: "AnonyMouse",
		description: req.body.description,
		views: "",
		likes: "",
		video: "https://project-2-api.herokuapp.com/stream?api_key=elkedick",
		timestamp: Date.now(),
		comments: [],
		id: uuid(),
		image: "https://picsum.photos/1920/1080"
	};

	// // Update our gamesData array and then write the updates to a games data JSON file
	videosData.push(newVideo);
	writeFile(videosData);

	// // For POST requests we will send back a 201(Created) status code and it's common to send the newly created object (in case we need that id) in a response
	res.status(201).json(newVideo);
});

module.exports = router;
