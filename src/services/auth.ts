import axios from 'axios'

export const login = (email: string, password: string) => {
	return axios.post('https://earlycoin.herokuapp.com/api/v1/auth/login', { email, password }, { headers: {} })
}

export const register = (name: string, email: string, phoneNumber: string, password: string) => {
	console.log(name, email, phoneNumber, password)
	return axios.post(
		'https://earlycoin.herokuapp.com/api/v1/auth/signup',
		{ firstName: name, lastName: name, email: email, password: password, phoneNumber: phoneNumber, confirmPassword: password },
		{ headers: {} }
	)
}