import { reqSearchList } from "@/api"
const state = {
    searchlist: {}
}
const mutations = {
    GETSEARCHLIST(state, searchlist) {
        state.searchlist = searchlist
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        const result = await reqSearchList(params)
        commit("GETSEARCHLIST", result.data);
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}