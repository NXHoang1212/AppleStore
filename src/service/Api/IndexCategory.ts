import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosIntance";

const fetchCategoryProduct = createAsyncThunk(
    'category/fetchCategoryProduct',
    async () => {
        try {
            const response = await AxiosInstance().get('/api/category/get-all')
            return response.data
        } catch (error: any) {
            console.log("🚀 ~ fetchCategoryProduct ~ error:", error)
        }
    }
)

export { fetchCategoryProduct }