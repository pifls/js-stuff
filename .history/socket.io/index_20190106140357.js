const express = require('express');

// App setup
const port = 3838;
const app = express();
const server  = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
