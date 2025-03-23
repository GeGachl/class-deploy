const UserModel = require('../models/user.model')

class UserController {
	static async getUsers(req, res) {
		try {
			const users = await UserModel.find()
			res.send(users)
		} catch (err) {
			console.log('Произошла ошибка при получении пользователей', err)
			res.send({ message: 'Произошла ошибка при получении пользователей', err })
		}
	}

	static async getUsersOnDiscount(req, res) {
		try {
			const users = await UserModel.find({ onDiscount: true })
			res.send(users)
		} catch (err) {
			console.log('Произошла ошибка при получении пользователя по id', err)
			res.send({ message: 'Произошла ошибка при получении пользователя по id', err })
		}
	}

	static async addUser(req, res) {
		const { name, price, onDiscount } = req.body
		try {
			const newUser = new UserModel({
				name,
				price,
				onDiscount
			})

			const savedUser = await newUser.save()
			res.status(201).send(savedUser)
		} catch (err) {
			console.log('Ошибка при создании пользователя', err)
			res
				.status(500)
				.send({ message: `Ошибка при создании пользователя: ${err.message}` })
		}
	}
}

module.exports = UserController
