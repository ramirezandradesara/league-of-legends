import axios from "axios";

export const getChamps = async () => {
    try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`)
        const results = await response.data.data;
        return results;

    } catch (error) {
        console.log(error);
    }
};
