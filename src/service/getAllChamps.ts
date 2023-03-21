import axios from "axios";
import { allChampsApi } from "helpers/apis";

export const getChamps = async () => {
  try {
    const response = await axios.get(allChampsApi);
    const results = await response.data.data;
    return results;
  } catch (error) {
    console.log(error);
  }
};
