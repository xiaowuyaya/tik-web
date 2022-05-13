import http from '../utils/http'

let api: any = {}

api.test = (data: object) => {
  return http.request({
    url: '/blackList/superFoolList',
    method: 'POST',
    data,
  })
}

// 获取最新版本号
api.getNewVersionCode = () => {
  return http.request({
    url: '/web/getLastVersionCode',
    method: 'POST',
  })
}

// 获取下载地址
api.getDownloadUrl = () => {
  return http.request({
    url: '/web/getLastVersionUrl',
    method: 'POST',
  })
}

// 下载统计
api.downloadStatistics = () => {
  return http.request({
    url: '/downloadStatistics/add',
    method: 'POST',
  })
}

// 获取黑名单榜单
api.getBansList = () => {
  const data = {
    count: 2,
  }
  return http.request({
    url: '/blackList/superFoolList',
    method: 'POST',
    data,
  })
}

// 添加反馈
api.addFeedback = (data: object) => {
  return http.request({
    url: '/feedBack/add',
    method: 'POST',
    data,
  })
}

export default api
