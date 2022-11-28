class TokenInfo {
  accessToken = '';
  refreshToken = '';
  accessTokenExpireTime = 0;
  refreshTokenExpireTime = 0;
}

const key = 'token'
const setToken = (tokenInfo: TokenInfo) => {
  window.localStorage.setItem(key, JSON.stringify(tokenInfo))
}

const getToken = () => {
  const value = window.localStorage.getItem(key)
  return JSON.parse(value)
}

const removeToken = () => {
  return window.localStorage.removeItem(key)
}

export { setToken, getToken, removeToken, TokenInfo }