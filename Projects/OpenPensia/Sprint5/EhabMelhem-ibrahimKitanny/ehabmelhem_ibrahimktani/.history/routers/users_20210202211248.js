const userControler = require("../controlers/user");
const router = require("express").Router();
router.get("/get-user", userControler.sendUser);
router.get("/vote", userControler.sendVote);
router.get("/vote", userControler.check-role);
module.exports = router;
