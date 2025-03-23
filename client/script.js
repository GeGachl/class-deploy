import { SERVER_URL } from './api.js'
import { renderAllUsers, renderAllUsersOnDiscount} from './utils/renderData.js'
import UserRequests from './utils/userRequests.js'

const inputName = document.querySelector('#name')
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const addBtn = document.querySelector('.c1-button')
const c2Container = document.querySelector('.c2-container')
const c3Container = document.querySelector('.c3-container')

async function initAllGoods() {
	const goods = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
	renderAllUsers(goods, c3Container)
}
initAllGoods()
async function initDiscounts() {
	const discounts = await UserRequests.getUserOnDiscount(`${SERVER_URL}/api/getUsersOnDiscount`)
	renderAllUsersOnDiscount(discounts, c2Container)
}
initDiscounts()
addBtn.addEventListener('click', async () => {
	const good = { 
		name: inputName.value,
		price: inputPrice.value,
		onDiscount: inputDiscount.checked
	 }
	await UserRequests.addUser(`${SERVER_URL}/api/addUser`, good)
})