let express = require('express');
let app = express();
require('./routs/index')(app);

require('dotenv').config();

app.listen(process.env.PORT, (err)=> {
    if(err){
        console.error(err.message);
    }
    else{
        console.log(`Server has started on port: ${process.env.PORT}`);
    }
})
