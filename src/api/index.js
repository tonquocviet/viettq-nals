import { get, post } from "./base";

async function doLogin(data) {
  const results = await post('/login', data);
  return results;
}

async function getList() {
  return get('/users');
}
export default {doLogin, getList};