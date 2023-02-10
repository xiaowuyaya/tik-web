import { http } from '../utils/request'

export function latestInfo() {
  return http.request({
    url: '/web/latest',
    method: 'GET',
  })
}

export function lastVersionUrl() {
  return http.request({
    url: '/web/getLastVersionUrl',
    method: 'GET',
  })
}
