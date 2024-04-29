const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
  test,
} = require("../controllers/UserController");

const router = require("express").Router();

router.get("/test", test);
router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router;
