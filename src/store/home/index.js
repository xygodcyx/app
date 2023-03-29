import { reqBaseCategoryList } from "@/api"
import { reqBaseBannerList } from "@/api"
import { reqBaseFloorList } from "@/api"
const state = {
    categorylist: [],
    bannerlist: [],
    floorlist: []
}
const mutations = {
    CATEGORYLIST(state, categorylist) {
        categorylist.splice(16, 1)
        state.categorylist = categorylist
    },
    BANNERLIST(state, bannerlist) {
        state.bannerlist = bannerlist
    },
    FLOORLIST(state, floorlist) {
        state.floorlist = floorlist
    }

}
const actions = {
    async categorylist({ commit }) {
        let result = await reqBaseCategoryList()
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqBaseBannerList()
        if (result.code === 200) {
            commit("BANNERLIST", result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqBaseFloorList()
        if (result.code === 200) {
            commit("FLOORLIST", result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}