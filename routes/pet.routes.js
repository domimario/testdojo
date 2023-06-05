const PetController = require("../controllers/pet.controller");
module.exports = (app) => {
  app.get("/api/pet", PetController.getAllPet);
  app.post("/api/pet", PetController.createPet);
  app.patch("/api/pet/:id", PetController.updatePet);
  app.get("/api/pet/:id", PetController.getOnePet);
  app.delete("/api/pet/:id", PetController.deletePet);
};
