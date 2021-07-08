let express = require('express');
let app = express();
let bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

require('./routs/index')(app);

app.listen(process.env.PORT, err => {
	if (err) {
		console.error(err.message);
	} else {
		console.log(`Server has started on port: ${process.env.PORT}`);
	}
});
