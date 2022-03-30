

import request from '@/utils/request'
export default {
  getList() {
    return request({
      url: `/service_cms/banner/getAllBanner`,
      method: 'get'
    })
  }
}
