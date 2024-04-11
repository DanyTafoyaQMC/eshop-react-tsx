import axios from "axios";

const ProductsApi = axios.create({
    baseURL: 'http://localhost:3001/api/products'
});

export default ProductsApi;