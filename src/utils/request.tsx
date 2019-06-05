import Taro from '@tarojs/taro'

interface requestFunc {
  (url: string, data: object, header: object, method?: any): Promise<{}>
}

// request 请求
const request: requestFunc = (url: string, data: object, header: object, method: any = 'POST') => {
  url = `https://www.yangfugui.com/ordering/api/${url}`;
  console.warn(`请求 url => ${url}`);
  header = {
    ...header,
    'Accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
  };
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      data,
      header,
      method,
      success(res) {
        if (res.statusCode === 200 && res.data.status === "200") {
          resolve(res.data.data);
        } else {
          reject(res.data)
        }
      },
      fail(err) {
        reject(err)
      },
      complete() {
        console.warn(`请求 url => ${url} => 请求完成`)
      }
    });
  });
}

export default request