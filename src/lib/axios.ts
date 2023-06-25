import axios from 'axios'

const token = process.env.ACCESS_TOKEN
const githubApi = 'https://api.github.com'

export const API_AXIOS = axios.create({
  baseURL: githubApi,
  headers: {
    Authorization: token,
  },
})

export const API_AXIOS_ISSUES = axios.create({
  baseURL: `${githubApi}/search`,
  headers: {
    Authorization: token,
  },
})
