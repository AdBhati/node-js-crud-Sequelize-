const express = require("express");
const {
  create,
  getAll,
  getById,
  deleteById,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.delete("/:id", deleteById);

module.exports = router;
