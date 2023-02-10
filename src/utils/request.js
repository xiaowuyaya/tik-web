import axios from 'axios'
import { ElMessage } from 'element-plus'

const CancelToken = axios.CancelToken
let sources = []

// 取消函数
let removeSource = config => {
  for (let item in sources) {
    if (sources[item].umet === config.url + '&' + config.method) {
      sources[item].cancel('已取消重复请求，请勿重复请求')
      sources.splice(item, 1)
    }
  }
}

class AxiosHttpRequest {
  constructor() {
    this.baseURL = 'https://tik.lol-tool.com'
    this.timeout = 10000
  }

  getConfigParams() {
    return {
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {},
    }
  }

  interceptors(instance, _url) {
    instance.interceptors.request.use(
      config => {
        removeSource(config)

        config.cancelToken = new CancelToken(c => {
          sources.push({ umet: config.url + '&' + config.method, cancel: c })
        })

        // config.headers['Authorization'] = getToken()
        config.headers['Content-Type'] = 'application/json;charset=utf-8'
        config.params = { ...config.params, _t: Date.now() }

        if (config.method === 'get' && config.params) {
          let url = config.url + '?'
          for (const propName of Object.keys(config.params)) {
            const value = config.params[propName]
            let part = encodeURIComponent(propName) + '='
            if (value !== null && typeof value !== 'undefined') {
              if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                  let params = propName + '[' + key + ']'
                  let subPart = encodeURIComponent(params) + '='
                  url += subPart + encodeURIComponent(value[key]) + '&'
                }
              } else {
                url += part + encodeURIComponent(value) + '&'
              }
            }
          }
          url = url.slice(0, -1)
          config.params = {}
          config.url = url
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )

    instance.interceptors.response.use(
      res => {
        removeSource(res.config)

        const code = res.data['code'] || 200
        let msg = res.data['msg'] || ''

        if (code === 200) {
          return Promise.resolve(res.data)
        }

        ElMessage.error(msg)

        return Promise.reject(res.data)
      },
      err => {
        if (err.message === 'Network Error') {
          err.message = 'Network Error'
        } else if (err.message.includes('timeout')) {
          err.message = 'timeout'
        } else if (err.message.includes('Request failed with status code')) {
          err.message = '系统接口' + err.message.substr(err.message.length - 3) + '异常'
        }
        ElMessage.warning(err.message)
        return Promise.reject(err)
      }
    )
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getConfigParams(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export const http = new AxiosHttpRequest()
