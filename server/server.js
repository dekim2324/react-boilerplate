const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('./client/dist'));

var PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})