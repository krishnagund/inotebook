const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"
const connectToMongo = async () => {
	try {
		await mongoose.connect(mongoURI);
		console.log("Connected to DB Successfully in");
	} catch (error) {
		console.log(error);
	}
};
mongoose
  .connect(mongoURI)
  .then(() => {
       console.log("Connected to DB Successfully");
  })
  .catch((error) => {
       console.log(error);
  });
module.exports = connectToMongo;

