
// 首页数据
import request from '@/utils/request'
export default {
  getList() {
    return request({
      url: `/service_video/indexPortal/getIndexData`,
      method: 'get'
    })
  }
}
