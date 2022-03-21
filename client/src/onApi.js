import axios from "axios"

const onApi = () => {
  const $api = axios.create({
    baseURL: 'http://localhost:5000/api'
  })
  return $api
}

export default onApi