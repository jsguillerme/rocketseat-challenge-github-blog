import axios from 'axios'

const token = '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'
const githubApi = 'https://api.github.com'

export const API_AXIOS = axios.create({
  baseURL: githubApi,
  headers: {
    Authorization: 'Bearer ' + token,
  },
})

export const API_AXIOS_ISSUES = axios.create({
  baseURL: `${githubApi}/search`,
  headers: {
    Authorization: 'Bearer ' + token,
  },
})
