const express = require("express");
const router = express.Router();

const PersonController = require("./controller/PersonController");
const CheckEmptyBody = require("./middleware/CheckEmptyBody");

const personController = new PersonController();

router.post("/v1/person", CheckEmptyBody, personController.CreatePerson);
router.get("/v1/person", personController.GetPerson);
router.get("/v1/person/:id", personController.GetOnePerson);
router.put("/v1/person/:id", CheckEmptyBody, personController.UpdatePerson);
router.delete("/v1/person/:id", personController.DeletePerson);

module.exports = router;
