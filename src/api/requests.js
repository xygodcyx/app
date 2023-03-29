// 二次封装axios
import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})
requests.interceptors.request.use((config) => {
    nProgress.start()
    return config
})
requests.interceptors.response.use(
    (res) => {
        nProgress.done()
        return res.data
    },
    (err) => {
        return Promise.reject(new Error("faille"))
    })

export default requests