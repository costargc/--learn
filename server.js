const express = require('express');
// const apiRoutes = require("./routes/apiRoutes");

const app = express();

// Sets up the Express app to handle data parsing
var path = require("path");
app.use(express.static(path.join(__dirname, "web")));

const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/*", function (req, res) {
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, "web", "home.html"));
});

// app.get("/*", function (req, res) {
//     // console.log(__dirname);
//     res.sendFile(path.join(__dirname, "web", "fail.html"));
// });

// Routes
// app.use("/", apiRoutes);
// app.use("/api", "htmlRoutes");

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
});