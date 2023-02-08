const router = require("express").Router();
const middleware = require("../middleware/auth");
const userControler = require("../controllers/users");
router.post("/api/createUser", userControler.CreateUser);
router.post("/api/login", userControler.VerifyUser);
router.get("/api/session", middleware.VerifySession);
router.get("/api/logout", userControler.Logout);
router.put("/api/update/:id",userControler.updateUser)
module.exports = { userRouter: router };
