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
		// 	// Here we are using a rest parameter to remove some of the keys from the video object, which is common for GET all requests, to return limited data

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

	// // Update our videosData array and then write the updates to a videos data JSON file
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

	// find the current video and it s index
	let currVidIndex;
	let currVid = videosData.find((video, i) => {
		if (video.id === req.params.videoID) {
			currVidIndex = i;
			return true;
		}
	});

	let comments = currVid.comments;
	//find the current comment and filter it out
	comments = comments.filter(
		(comment) => comment.id !== req.params.commentID
	);

	//replace the current video comments array with the updated comments
	currVid.comments = comments;

	//replace teh current video with the updated comments
	videosData[currVidIndex] = currVid;
	writeFile(videosData);

	res.status(204).send();
});

router.put("/:videoID/likes", (req, res) => {
	videosData = readData();
	let currVidIndex;
	let currVid = videosData.find((video, i) => {
		if (video.id === req.params.videoID) {
			currVidIndex = i;
			return true;
		}
	});

	//++ syntax returns the value before  ++, so when you store it in a variable you'll get the old value! interesting...
	currVid.likes++;

	videosData[currVidIndex] = currVid;
	writeFile(videosData);
	res.status(200).send();
});

module.exports = router;
