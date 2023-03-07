import Axios from "axios";
import { api } from "../api";
import { ErrorHandeller } from "./Error";

// Index of items
const Index = async (header) => {
  try {
    const response = await Axios.get(`${api}user`, header);
    if (response.status === 200) return response.data;
  } catch (error) {
    if (error) return ErrorHandeller(error);
  }
};

const User = {
  Index,
};

export default User;
