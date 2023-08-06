import axios, { AxiosError, AxiosResponse } from 'axios';

const API_ENDPOINT = process.env.NEXT_PUBLIC_BASE_URL;

export const login = (email: string, password: string): Promise<AxiosResponse> => {
  const promise = axios({
    method: 'POST',
    url: `${API_ENDPOINT}/auth`,
    data: {
      email,
      password,
    },
  });
  return promise;
};

export const search = async (searchName: string): Promise<AxiosResponse> => {
  const promise = axios({
    method: 'GET',
    url: `${API_ENDPOINT}/product/search?searchName=${searchName}`,
  });
  return promise;
};

export const listCategory = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${API_ENDPOINT}/product/list-category`,
    });
    return res.data;
  } catch (_error) {
    const error = (_error as AxiosError).response?.data;
    console.log(error);
  }
};
