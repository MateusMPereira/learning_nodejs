const PersonModel = require("../model/PersonModel");

class PersonController {
  async GetPerson(req, res) {
    await PersonModel.find()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  async GetOnePerson(req, res) {
    const id = req.params.id;

    await PersonModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  async CreatePerson(req, res) {
    const body = req.body;
    console.log(body);
    await PersonModel.create(body)
      .then((result) => {
        res.status(201).json({ id: result._id });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  async UpdatePerson(req, res) {
    const body = req.body;
    const id = req.params.id;

    await PersonModel.findOneAndUpdate({ _id: id }, body, { new: true })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  async DeletePerson(req, res) {
    const id = req.params.id;

    await PersonModel.findByIdAndDelete({ _id: id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }
}

module.exports = PersonController;
