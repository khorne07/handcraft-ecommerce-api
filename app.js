const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const models = require("./models");
const router = require("./routes/router");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});

//Main Router.
app.use("/API_v1.0.0", (req, res, next) => {
	router(req, res, next);
});

// Catch 404 errors and forward to error handler.
// This is called if no match is found in the preceding route functions.
app.use(function (req, res, next) {
	var err = new Error("Requested Route Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	var errorResponse = {};
	errorResponse.error = { message: err.message };
	err.instance && (errorResponse.error.instance = err.instance);
	if (err.errors) {
		errorResponse.error.errorSummary = err.errors.map((e) => ({
			message: e.message,
			field: e.path,
			value: e.value,
		}));
	}
	res.status(err.status).json(errorResponse);
});

//DB sync and server initialization.
const port = process.env.PORT || 4000;
models.sequelize
	.sync({ force: true })
	.then(function () {
		app.listen(port, function () {
			console.log(`API listening on port ${port}`);
		});
	})
	.catch((e) => console.log(e));
