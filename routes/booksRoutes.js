const express = require("express");
const router = express.Router();
const {

    getAllbooks,
    getBooksByGenre,

} = require("../controller/booksController");

router.get("/", getAllbooks);
router.get("/genre/:genre",getBooksByGenre,);


module.exports = router;