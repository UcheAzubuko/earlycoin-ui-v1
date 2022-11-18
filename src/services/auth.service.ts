import axios from 'axios'

export const request = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com/`,
	// headers: {
	// 	Authorization: 'Bearer {token}',
	// },
})

export class AuthService {
	public loginUser = async (email: string, password: string): Promise<unknown> => {
		const data = { email, password }

		return await axios.post('', data, {
			headers: {},
		})
	}
}
