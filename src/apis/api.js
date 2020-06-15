const API_HOST_URL = 'http://localhost:3000/api/v1';
export const GUEST_API_PRODUCTS_URL = API_HOST_URL + '/guest/products';
export const API_PRODUCTS_URL = API_HOST_URL + '/products';
export const GUEST_API_FILE_SERVER_INFO_URL = API_HOST_URL + '/guest/file-server-info/1';
export const API_FILE_SERVER_INFO_URL = API_HOST_URL + '/file-server-info/1';
export const API_LOGIN_URL = API_HOST_URL + '/login';

export function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()) // 輸出成 json
  }