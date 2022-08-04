import http from "../utils/request";

export function getLastVersionCode(){
  return http.request({
    url: '/web/getLastVersionCode',
    method: 'GET',
  })
}

export function getLastVersionUrl(){
  return http.request({
    url: '/web/getLastVersionUrl',
    method: 'GET',
  })
}