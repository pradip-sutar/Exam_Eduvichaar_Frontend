import axios from "axios";
import toast from "react-hot-toast";

export const postStudentSignup = async(data) => {
  try {
    const response =await  axios.post(`${process.env.REACT_APP_IP}/api/v1/students-registration/`, data);
    if (response.status == 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    toast.error("Getting Error on Submit data");
  }
};
