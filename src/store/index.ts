import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export interface IAuthState {
	L_I: boolean
}

const vuexLocal = new VuexPersistence<IAuthState>({
	storage: window.localStorage,
})

const store: StoreOptions<IAuthState> = {
	state: {
		L_I: false,
	},

	mutations: {
		SET_LISTATE(state, payload) {
			state.L_I = payload
		},
	},

	plugins: [vuexLocal.plugin],
}

export default new Vuex.Store<IAuthState>(store)
