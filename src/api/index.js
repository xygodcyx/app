import requests from "./requests";
import mockAxios from "./mockAxios"
//   /api/product/getBaseCategoryList
export const reqBaseCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" })
export const reqBaseBannerList = () => mockAxios({ url: "/banner", method: "get" })
export const reqBaseFloorList = () => mockAxios({ url: "/floor", method: "get" })
export const reqSearchList = (params) => requests({ url: "/list", method: "post", data: params })