const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number,required: true},
	onDiscount: { type: Boolean, required: true}
})

const UserModel = mongoose.model('goods', userSchema)

module.exports = UserModel
