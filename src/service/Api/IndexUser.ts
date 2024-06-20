import AxiosInstance from "../../utils/AxiosIntance";
import { Users, UpdateUser } from '../../model/entity/IndexUsers.entity';

const HandleLoginUser = async (email: string, password: string, phone: string) => {
    try {
        const response = await AxiosInstance().post('/api/auth/login', { email, password, phone })
        return response
    } catch (error: any) {
        throw new Error(error)
    }
}

const HandleRegisterUser = async (fullname: String, email: String, phone: String, password: String, confirm_password: String) => {
    try {
        const response = await AxiosInstance().post('/api/auth/register', { fullname, email, phone, password, confirm_password })
        return response
    } catch (error: any) {
        console.log("🚀 ~ RegisterUser ~ error:", error)
        throw new Error(error)
    }
}

const HandleUpdateUser = async (id: String, infor: UpdateUser) => {
    try {
        const response = await AxiosInstance().put(`/api/auth/updateUser/${id}`, infor)
        return response
    } catch (error: any) {
        throw new Error(error)
    }
}

const HandleUploadAvatar = async (id: String, photoUrl: String) => {
    try {
        const formData = new FormData()
        formData.append('photoUrl', {
            uri: photoUrl,
            type: 'image/jpeg',
            name: 'photoUrl.jpg'
        })
        const response = await AxiosInstance('multipart/form-data').put(`/api/auth/uploadAvatar/${id}`, formData)
        return response
    } catch (error: any) {
        console.log("🚀 ~ HandleUploadAvatar ~ error:", error)
    }
}

export { HandleRegisterUser, HandleLoginUser, HandleUpdateUser, HandleUploadAvatar }