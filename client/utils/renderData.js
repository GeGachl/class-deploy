export const renderAllUsers = (users, renderTo) => {
	renderTo.innerHTML = ''
	users.forEach(user => {
		if(user.onDiscount) {
			renderTo.insertAdjacentHTML(`beforeend`, `<li>${user.name}  <s>${user.price}$</s>  <span id="goodOnDiscount">${user.price-(user.price*0.25)}$</span></li>`)
		} else {
			renderTo.insertAdjacentHTML(`beforeend`, `<li>${user.name}  <span>${user.price}$</span></li>`)
		}
	})
}

export const renderAllUsersOnDiscount = (users, renderTo) => {
	renderTo.innerHTML = ''
	users.forEach(user => {
		renderTo.insertAdjacentHTML(`beforeend`, `<li>${user.name} <s>${user.price}$</s>  <span id="goodOnDiscount">${user.price-(user.price*0.25)}$</span></li>`)
	})
}
