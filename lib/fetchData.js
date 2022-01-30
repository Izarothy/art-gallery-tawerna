import axios from 'axios';
const fetchData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
