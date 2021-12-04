import axios from 'axios';


class AxiosService {
  axiosInstance = null;

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      baseURL: '/api/v1',
      timeout: 10000
    });

//avoid 401 page error 
    this.axiosInstance.interceptors.request.use((config) => {
      const token = sessionStorage.getItem('acc-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  get accAxios() {
    return this.axiosInstance;
  }
}

export default new AxiosService();
