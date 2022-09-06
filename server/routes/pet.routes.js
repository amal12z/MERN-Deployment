const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/pet', PetController.findAllPets);
    app.get('/api/pet/:id', PetController.findOneSinglePet);
    app.put('/api/pet/:id', PetController.updateExistingPet);
    app.post('/api/pet', PetController.createNewPet);
    app.delete('/api/pet/:id', PetController.deleteAnExistingPet);
}