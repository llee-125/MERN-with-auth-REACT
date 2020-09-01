const router = require("express").Router();
const auth = require("../middleware/auth");
const Todo = require("../models/todoModel");

router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newTodo = new Todo({
      title,
      userId: req.user,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get;

module.exports = router;
