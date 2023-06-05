const Pet = require("../models/pet.model");

module.exports.getAllPet = (req, res) => {
  Pet.find({})
    .sort({ petType: "asc" })
    .then((pets) => {
      console.log(pets);
      res.json(pets);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports.createPet = (req, res) => {
  Pet.findOne({ petName: req.body.petName })
    .then((existingPet) => {
      if (existingPet) {
        return res.status(400).json({ error: "Pet name must be unique" });
      }

      Pet.create(req.body)
        .then((newPet) => {
          console.log(newPet);
          res.json(newPet);
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updatePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidation: true,
  })
    .then((onePet) => res.json(onePet))
    .catch((err) => res.status(400).json(err));
};

module.exports.getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((onePet) => {
      console.log(onePet);
      res.json(onePet);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id }) //note: "id" here MUST match id in corresponding route
    .then((deletePet) => res.json(deletePet))
    .catch((err) => res.status(400).json(err));
};
