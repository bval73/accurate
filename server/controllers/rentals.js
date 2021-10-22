
const Rental = require('../models/rental');

exports.getRentals = (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundRentals);
  });
};

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;

  Rental.findById(rentalId, (err, foundRental) => {
    if(err) {
      return res.mongoError(err);
    }
    return res.json(foundRental);
  });
};

// exports.getRentalById = (req, res) => {
//   const { rentalId } = req.params;
//   const rental = rentals.find(r => r._id === rentalId);

//   return res.json(rental);
// };

exports.createRental = (req, res) => {
  const rentalData = req.body;
  Rental.create(rentalData, (err, createdRental) =>{
    if(err) {
      return res.mongoError(err);
    }
    return res.json({message: `Rental with id: ${createdRental._id} was added`});
  })
  
  // rentals.push(rentalData);
  // return res.json({message: `Rental with id: ${rentalData._id} was added`});
};

exports.deleteRental = (req, res) => {
  const rentalId = req.body;
  Rental.delete(rentalId, (err, createdRental) =>{
    if(err) {
      return res.mongoError(err);
    }
    return res.json({message: `Rental with id: ${rentalId} was removed`});
  })
  
  // rentals.push(rentalData);
  // return res.json({message: `Rental with id: ${rentalData._id} was added`});
};

exports.updateRental = (req, res) => {
  const rentalData = req.body;
  Rental.patch(rentalData, (err, createdRental) =>{
    if(err) {
      return res.mongoError(err);
    }
    return res.json({message: `Rental with id: ${createdRental._id} was updated`});
  })
  
  // rentals.push(rentalData);
  // return res.json({message: `Rental with id: ${rentalData._id} was added`});
};

// exports.deleteRental = (req, res) => {
//   const { rentalId } = req.params;
//   const rIndex = rentals.findIndex(r => r._id === rentalId);
//   rentals.splice(rIndex, 1)

//   return res.json({message: `Rental with id: ${rentalId} was deleted`})
// };

// exports.updateRental = (req, res) => {
//   const { rentalId } = req.params;
//   const rentalToUpdate = req.body;
//   const rIndex = rentals.findIndex(r => r._id === rentalId);
//   pages[rIndex].city = rentalToUpdate.city;
//   pages[rIndex].title = rentalToUpdate.title;

//   return res.json({message: `Page with id: ${rentalId} was updated`})
// }
