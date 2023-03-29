import Swiper from "swiper";

export default {
    install(Vue) {
        Vue.prototype.$swiper = function (el, options) {
            return new Swiper(el, options);
        };
    }
};