import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    bl_longitude: "108.473209",
    tr_longitude: "109.149359",
    tr_latitude: "12.838442",
  },
  headers: {
    "X-RapidAPI-Key": "f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
