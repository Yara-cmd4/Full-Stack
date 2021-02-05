const express=require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const app = express();
app.use(bodyParser.json());
app.use(cookieParser())


app.use(express.static('client/build'));
/


const port = process.env.PORT || 3002;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });


