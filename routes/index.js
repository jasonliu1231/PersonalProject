var express = require("express");
var router = express.Router();
const db = require("../db.js");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.post("/login", async function (req, res, next) {
    const { user, password } = req.body;
    console.log(user, password)
    const conn = await db.connectpgdb();

    try {
        let sql = `SELECT * From "user" WHERE "user"=$1 AND password=$2`;
        let params = [user, password];
        let result = await conn.query(sql, params);

        if (result.rows.length == 0) {
            res.status(404).send("帳號密碼不存在！");
        } else {
            res.status(200).send("登入成功！");
        }
    } catch (err) {
        console.error(err);
    } finally {
        conn.release();
    }
});

module.exports = router;
