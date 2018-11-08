import Cookie from 'js-cookie'

const TokenKey = 'admin-token'

export function getToken() {
  return Cookie.get(TokenKey);
}

export function setToken(token) {
  return Cookie.set(TokenKey, token);
}

export function removeToken() {
  return cookie.removeToken(TokenKey);
}