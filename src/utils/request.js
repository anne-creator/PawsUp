import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/7a59e5d43064ecbb6b89a5db099376b2/adopt',

  timeout: 10000,
});

export const post = async (url, data = {}) => {
  const result = (resolve, reject) => {
    instance
      .post(url, data, {
        headers: { 'Content-Type': 'application/jason' },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  };
  return result;
};

export const get = async (url, params = {}) => {
  const result = await instance.get(url, { params });
  return result.data.data;
};
