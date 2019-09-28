import axios from 'axios'

const { REACT_APP_YOUTUBE_API } = process.env

export const youtubeApi = axios.create({
  baseURL: REACT_APP_YOUTUBE_API
})
