import axios from 'axios'

const httpClient = axios.create({
  headers: {
    Accept: 'application/json'
  },
  baseURL: 'http://localhost:1337'
})

httpClient.interceptors.response.use((response) => {
  const res = response.data
  return res
}, (error) => {
  console.log('error', error)
  let err
  if (error.response) {
    // The request was made and the server responded with a status code
    err = new Error(`HTTP error: ${error.response.status}`)
    err.id = 'HTTP_SERVER_ERROR'
    err.code = error.response.status
    if (error.response.data?.error?.message) {
      err.message = error.response.data.error.message
    }
  } else if (error.request) { 
    // The request was made but no response was received
    err = new Error('network error')
    err.id = 'NETWORK_ERROR'
  } else {
    err = new Error(error.message)
  }
  throw err
})

export const getEpg = () => {
  return httpClient.get('epg')
} 