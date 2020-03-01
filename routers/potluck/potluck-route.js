const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({message: "Potluck route working"})
})

module.exports = router