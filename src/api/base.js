import axios from './axios';

async function get(url, options) {
  try {
    const response = await axios.get(url, options);
    return response.data;
  }
  catch (e) {
    alert(e);
    throw e;
  }
}

async function post(url, data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  }
  catch (e) {
    alert(e);
    throw e;
  }
}

export { get, post };