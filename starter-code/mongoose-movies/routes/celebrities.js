const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then( celebrities => {
      res.render("celebrities/index", {celebrities});
    })
    .catch( error => {
    })
});

// GET detail
router.get("/:id", (req, res, next) => {
  Celebrity.findById( req.params.id)
    .then( celebrity => {
      res.render("celebrities/show", {celebrity} );
    })
})

module.exports = router;
