import { http } from '../utils/request'

export function latestInfo() {
  return http.request({
    url: '/web/latest',
    method: 'GET',
  })
}
