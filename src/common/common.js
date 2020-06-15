
const guest_auth = 'guest:guest';
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const Base64 = {
  btoa: (input = '') => {
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || (map = '=', i % 1);
      output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

      charCode = str.charCodeAt(i += 3 / 4);

      if (charCode > 0xFF) {
        throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }

      block = block << 8 | charCode;
    }

    return output;
  },

  atob: (input = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
      buffer = str.charAt(i++);

      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  }
};

export const GUEST_HEADER = {
  headers: {
    'Authorization': 'Basic ' + Base64.btoa(guest_auth),
    'Content-Type': 'application/json'
  },
};

export const FILE_SERVER_INFO_STR = 'FILE_SERVER_INFO';
export const LOCAL_USER_ID_STR = 'ID';
export const LOCAL_USER_NAME_STR = 'NAME';
export const LOCAL_USER_TOKEN_STR = 'TOKEN';

export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

