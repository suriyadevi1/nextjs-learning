import axios from "axios";

const getApiResult = async (termValue = "Dresses") => {
    const endpoint =
      "https://api-stage.marksandspencer.com/outfit-creator-service/search";
    const param = `term=${termValue}`;
    const results = await axios
      .get(`${endpoint}?${param}`)
      .then((res) => ({
        error: false,
        response: res.data,
      }))
      .catch(() => ({
        error: true,
        response: null,
      }));
    return results.response;
};

export default getApiResult;