const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

interface Options {
  method: string;
  data?: any;
}

// function queryStringify(data) {
//   if (typeof data !== 'object') {
//     throw new Error('Data must be object');
//   }
//
//   const keys = Object.keys(data);
//   return keys.reduce((result, key, index) => {
//     return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
//   }, '?');
// }

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2'
  protected endpoint: string

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
  }

  // public get = (url, options: Options = {}) => {
  //   if (options.data) {
  //     url += queryStringify(options.data);
  //   }
  //
  //   return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  // };

  public get<Response>(path = '/'):Promise<Response> {
    return this.request<Response>(this.endpoint + path)
  }

  public post<Response = void>(path: string, data?: unknown):Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.POST,
      data
    })
  }

  public put<Response = void>(path: string, data?: unknown):Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PUT,
      data
    })
  }

  public patch<Response = void>(path: string, data?: unknown):Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PATCH,
      data
    })
  }

  public delete<Response>(path: string):Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.DELETE
    })
  }


  private request<Response>(url:string, options: Options = {method: Method.GET}): Promise<Response> {
    const { method, data } = options;

    return new Promise( (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.status < 400) {
          resolve(xhr.response)
        } else {
          reject(xhr.response)
        }
      }

      xhr.onabort = () => reject({reason: 'abort'})
      xhr.onerror = () => reject({reason: 'network error'})
      xhr.ontimeout = () => reject({reason: 'timeout'});

      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.withCredentials = true
      xhr.responseType = 'json'

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
