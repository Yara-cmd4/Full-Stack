const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const loginRouter = require("./routs/login");

app.use(express.static("client/build"));
app.use("/login", loginRouter);
const userSchema = require("./schema/User");
//DB Conn
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:t6GUh9GibusbwWBC@cluster0.gntlf.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const companyschema = new mongoose.Schema({
  logo: String,
  name: String,
  par: String,
});

const company = mongoose.model("companyschema", companyschema);

//read
app.get("/get-companies", (req, res) => {
  try {
    //get from DB
    company.find({}).then((docs) => {
      res.send({ companies: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});

const mock_data = [
  {
    test: "test",
  },
];

app.get("/get-data", (req, res) => {
  res.send({ ok: true });
});

app.get("/get-connect", (req, res) => {
  try {
    //get from DB
    mock_data.then((docs) => {
      res.send({ companies: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`\x1b[36m Server running on port ${port}  馃敟`);
});

// const User = mongoose.model("userSchema", userSchema);

// company.insertMany([
//   { logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: '驻专砖诪专拽讟', par: '拽诪注讜谞讗讜转 诪讝讜谉' },
//   { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: '讛讜诇诪住 驻诇讬讬住', par: '讞讚专讬 讻讜砖专' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: '讞讬诇谉', par: '讟讻谞讜诇讜讙讬讛' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: '讘谞拽 讛驻讜注诇讬诐', par: '讘谞拽讗讜转' },
//   { logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: '驻专砖诪专拽讟', par: '拽诪注讜谞讗讜转 诪讝讜谉' },
//   { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: '讛讜诇诪住 驻诇讬讬住', par: '讞讚专讬 讻讜砖专' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: '讞讬诇谉', par: '讟讻谞讜诇讜讙讬讛' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: '讘谞拽 讛驻讜注诇讬诐', par: '讘谞拽讗讜转' }

// ]).then(function(){
//   console.log("Data inserted")  // Success
// }).catch(function(error){
//   console.log(error)      // Failure
// });

// const newcomp = new company({
//   logo:
//     "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg",
//   name: "驻专砖诪专拽讟",
//   par: "拽诪注讜谞讗讜转 诪讝讜谉",
// });

// newcomp.save().then(()=>console.log('saved to DB'));
