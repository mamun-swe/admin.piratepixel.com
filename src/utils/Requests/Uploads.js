import Axios from "axios";
import swal from "sweetalert";
import { api } from "../api";
import { ErrorHandeller } from "./Error";

// Index of items
const Index = async (page, limit, header) => {
  try {
    const response = await Axios.get(
      `${api}uploads?page=${page}&limit=${limit}`,
      header
    );
    if (response.status === 200) return response.data;
  } catch (error) {
    if (error) return ErrorHandeller(error);
  }
};

// Update item
const Update = async (id, header) => {
  try {
    const response = await Axios.get(`${api}uploads/${id}`, header);
    if (response.status === 201) {
      swal({
        title: "Successfully!",
        text: response.data.message,
        icon: "success",
        button: false,
      });
      return true;
    }
  } catch (error) {
    if (error) return ErrorHandeller(error);
  }
};

const Uploads = {
  Index,
  Update,
};

export default Uploads;
