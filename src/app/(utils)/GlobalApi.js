const { default: axios } = require("axios");


const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getProductsData = async () => {
    try {
        const res = await axios.get(backendUrl + '/api/product/list')

        if (res.data.success) {
            return res.data.products
        } else {
            console.log(res.data.message)
        }

    } catch (error) {
        console.log(error)

    }
}







export default { getProductsData }