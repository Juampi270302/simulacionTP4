import axios from "axios";

export const getSimulacion = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/api/simular", data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

