import axios from 'axios'
import app from '@/main'

const instance = axios.create({
	baseURL: 'http://localhost:8000/api'
})

instance.interceptors.request.use(config => {
    app.$Progress.start()

    return config
})

instance.interceptors.response.use(response => {
  app.$Progress.finish()

  return response
})

export default instance