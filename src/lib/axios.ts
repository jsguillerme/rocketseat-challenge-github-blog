import axios from 'axios'

const token = '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'

export const API_AXIOS = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'Bearer ' + token,
  },
})
