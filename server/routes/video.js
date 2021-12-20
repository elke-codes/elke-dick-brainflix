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
	console.log("videosData", videosData);
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

// get detailed info for a specific video GET /video/:videoID
router.get("/:videoID", (req, res) => {
	const videosData = readData();

	const video = videosData.find((video) => video.id === req.params.videoID);

	if (!video) {
		return res.status(404).send("Video not found");
	}

	res.status(200).json(video);
});

// post a new "video"
router.post("/", (req, res) => {
	//get the most up to date data
	const videosData = readData();

	// We create IDs on a server, so it's not going to be a part of a request, rather we can use uuid or similar library to generate the new id
	const newVideo = {
		title: req.body.title,
		channel: "AnonyMouse",
		description: req.body.description,
		views: 69000,
		likes: 420,
		video: "https://project-2-api.herokuapp.com/stream?api_key=elkedick",
		timestamp: Date.now(),
		comments: [],
		id: uuid(),
		image: "http://localhost:8080/images/video-upload-image.jpg"
	};

	// // Update our gamesData array and then write the updates to a games data JSON file
	videosData.push(newVideo);
	writeFile(videosData);

	// // For POST requests we will send back a 201(Created) status code and it's common to send the newly created object (in case we need that id) in a response
	res.status(201).json(newVideo);
});

// post a comment to a specific video
router.post("/:videoID/comments", (req, res) => {
	//get the most up to date data from the json file
	const videosData = readData();
	//find the video with the currently selected video id
	const video = videosData.find((video) => video.id === req.params.videoID);

	const newComment = {
		name: req.body.name,
		comment: req.body.comment,
		timestamp: new Date(),
		id: uuid()
	};
	//dive into the comments array
	const comments = video.comments;
	//push new comment into the comments array
	comments.push(newComment);
	writeFile(videosData);

	res.status(201).json(newComment);
});

router.delete("/:videoID/comments/:commentID", (req, res) => {
	let videosData = readData();

	// TODOdive into comments and find the comment id
	const currVid = videosData.find((video) => video.id === req.params.videoID);
	let comments = currVid.comments;
	let currComment = comments.find(
		(comment) => comment.id === req.params.commentID
	);

	comments = comments.filter((comment) => comment.id !== currComment.id);

	// videosData = videosData.filter((video) => video.id !== currVid.id);

	writeFile(videosData);

	res.status(204).send();
});

module.exports = router;

// It's a good idea to setup validation for your endpoints to make sure the data required is sent in a request
// if (
// 	!req.body.title ||
// 	// !req.body.channel ||
// 	// !req.body.image ||

// 	!req.body.description
// ) {
// 	return res
// 		.status(400)
// 		.send(
// 			"Please make sure to include title,  and description of the video"
// 		);
// }
