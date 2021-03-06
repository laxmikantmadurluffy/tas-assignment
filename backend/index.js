var express = require('express');
require('express-group-routes');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const CONSTANTS = require('./constants/appConstants');
require('./src/routes/loginRoute')(app);
require('./src/routes/patientRoute')(app);
app.listen(CONSTANTS.PORT, () => console.log(`App listening on port ${CONSTANTS.PORT}`));