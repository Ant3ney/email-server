let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

require('./routs/index')(app);

app.listen(process.env.PORT, err => {
	if (err) {
		console.error(err.message);
	} else {
		console.log(`Server has started on port: ${process.env.PORT}`);
	}
});
