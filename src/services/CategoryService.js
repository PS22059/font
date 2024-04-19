import { axiosJWT } from "./UserService"

export const getAllCategory = async () => {
    let res = res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/category/findAll`)
    return res.data
}