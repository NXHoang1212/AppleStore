import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosIntance";

const fetchBannerProduct = createAsyncThunk(
    'banner/fetchBannerProduct',
    async () => {
        try {
            const response = await AxiosInstance().get('/api/banner/get-all')
            return response.data
        } catch (error: any) {
            console.log("🚀 ~ fetchCategoryProduct ~ error:", error)
        }
    }
)

export { fetchBannerProduct }