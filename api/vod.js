
import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/service_vod/vod/getPlayAuth/${vid}`,
      method: 'get'
    })
  }
}
