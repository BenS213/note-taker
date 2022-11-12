const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");
const HTMLRoutes = require("./routes/HTMLRoutes");

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', HTMLRoutes);

app.listen(PORT, () => {
    console.log(`API is now listening on port ${PORT}!`)
});