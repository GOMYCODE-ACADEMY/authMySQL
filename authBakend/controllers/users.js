const { connection } = require("../configurationMySQL/config");
const crypto = require("crypto");
const auth = require("../middleware/auth");
const utile = require("../middleware/util");
const session = require("../controllers/session");

module.exports = {
  CreateUser: (req, res) => {
    let lastAtPos = req.body.email.lastIndexOf("@");
    let lastDotPos = req.body.email.lastIndexOf(".");
    let passwordHashed = crypto
      .createHash("sha256")
      .update(req.body.password, "utf8")
      .digest("hex");
    let query = `select * from user where email="${req.body.email}"`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else if (results.length > 0 && results[0].email === req.body.email) {
        res.status(200).send("user exist");
      } else if (!results.length && results === undefined) {
        res.status(202).send("check somthing went wrong!");
      } else if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          req.body.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          req.body.email.length - lastDotPos > 2
        )
      ) {
        res.status(400).send("forma ghalta ya ablah");
      } else {
        let query = `INSERT INTO user(user_Name,email,phone_Number,password,confirm_password,photo)VALUES("${req.body.user_Name}","${req.body.email}","${req.body.phone_Number}","${passwordHashed}","${passwordHashed}","${req.body.photo}")`;
        connection.query(query, (error, results) => {
          if (error) {
            res.status(500).send(error);
          } else {
            res.status(200).send("user created");
          }
        });
      }
    });
  },

  VerifyUser: (req, res) => {
    var passwordHashed = crypto
      .createHash("sha256")
      .update(req.body.password, "utf8")
      .digest("hex");
    const query = `select * from user where email="${req.body.email}"`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else if (results.length > 0 && results[0].password === passwordHashed) {
        var session = utile.RandomString(32);
        auth.CreateSession(req, res, results[0].id, session);
      } else if (
        results.length === 0 ||
        results[0].password !== passwordHashed
      ) {
        res.status(200).send("somthing went wrong");
      } else {
        res.status(404).send("not found");
      }
    });
  },
  updateUser:((req,res)=>{
const query = `UPDATE user SET email="${req.body.email}",phone_Number="${req.body.phone_Number}",photo="${req.body.photo}"`;
           connection.query(query,(err,result)=>{
            err?res.status(500).send(err):res.status(200).send("user updated")
           })
  }),
  Logout: (req, res) => {
    console.log(req.cookies);
    session
      .Delete(req.cookies.test)
      .then((result) => {
        if (result) {
          res.status(200).send("user logout");
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
