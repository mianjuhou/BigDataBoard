import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000,
});

export default service
