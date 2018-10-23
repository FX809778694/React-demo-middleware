import {
  fetchTestImgResource
} from "./resources"

export default {

  //测试接口请求
  fetchTestImg: function () {
    return fetchTestImgResource('post')
  }
}