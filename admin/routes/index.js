var express = require("express");
var router = express.Router();

// 로그인 페이지
router.get("/", async (req, res, next) => {
	res.render("login");
});

router.post("/", async (req, res, next) => {
	res.redirect("/login");
});

router.get("/main", async (req, res, next) => {
	res.render("index");
});

router.post("/main", async (req, res, next) => {
	res.redirect("/main");
});

module.exports = router;
