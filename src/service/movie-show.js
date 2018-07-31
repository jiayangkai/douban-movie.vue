import fecth from '../common/fetch'

// 获取电影
export const getMovie = (params) => fecth({
  'url': '/v2/movie/in_theaters',
  'method': 'get',
  'params': params
})

export const getComingMovie = (params) => fecth({
  'url': '/api/movie/coming_soon' + params
})
