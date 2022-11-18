import axios from 'axios'

export const login = (email: string, password: string) => {
	return axios.post('', { email, password }, { headers: {} })
}

export const register = (name: string, email: string, dob: string, phoneNumber: string, password: string) => {
	return axios.post('', { email, password }, { headers: {} })
}
