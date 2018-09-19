const mongoose 	= require("mongoose"),
	  Schema	= mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Item", ItemSchema)