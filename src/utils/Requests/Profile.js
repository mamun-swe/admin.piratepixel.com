import Axios from 'axios'
import { api } from '../api'
import { ErrorHandeller } from './Error'

// My profile
const MyProfile = async (header) => {
    try {
        const response = await Axios.get(`${api}me`, header)
        if (response.status === 200) return response.data
    } catch (error) {
        if (error) return ErrorHandeller(error)
    }
}

const Profile = {
    MyProfile
}

export default Profile