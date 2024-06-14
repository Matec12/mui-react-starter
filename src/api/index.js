import axios from 'axios';
import { productionUrl, stagingUrl } from '@/config/baseUrl';

export const baseURL = import.meta.env.DEV ? stagingUrl : productionUrl;

const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.request.use((config) => {
  // handle request config
  console.log({ config });
});

axiosInstance.interceptors.response.use(
  async (response) => {
    //  intercept successfull response
    console.log({ response });
  },
  function (error) {
    //  intercept failed response
    console.log({ error });
  }
);

export default axiosInstance;
