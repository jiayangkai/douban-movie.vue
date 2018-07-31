import {
  getMovie
} from '../service/movie-show.js'

export default {
  async getMovie({
    commit
  }, params) {
    let res = await getMovie(params)
    console.log(res)
  }
}
