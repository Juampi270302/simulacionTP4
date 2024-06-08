import axios from "axios";

export const getSimulacion = async (data) => {
    await axios.post("url", data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
};

