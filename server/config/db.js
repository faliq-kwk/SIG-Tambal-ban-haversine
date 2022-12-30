const mongoose = require("mongoose");

const HubungkanDatabase = async () => {
	try {
          const conn = await mongoose.connect(process.env.MONGO_URL)

          console.log(`MongoDB Terhubung ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		console.log("Gagal Terhubung ke Database");
	}
};

module.exports = HubungkanDatabase