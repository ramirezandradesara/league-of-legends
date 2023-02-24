import axios from "axios";

export const getChampData = async (id: string) => {
  try {
    const response = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${id}.json`
    );
    const results = await response.data.data;
    return results;
  } catch (error) {
    console.log(error);
  }
};
