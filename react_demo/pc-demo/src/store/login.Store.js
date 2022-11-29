
import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, TokenInfo } from '@/utils'

class LoginStore {
  token = getToken()?.accessToken || ''
  refreshToken = ''
  constructor() {
    // 
    makeAutoObservable(this)
  }
  async setToken ({ mobile, code }) {

    const resp = await http.post('/authorizations', {
      mobile,
      code
    })
    console.log(resp)
    this.token = resp.data.token
    this.refreshToken = resp.data.refresh_token
    console.log(`token: ${this.token}, refreshToken: ${this.refreshToken}`)
    let tokenInfo = new TokenInfo()
    tokenInfo.accessToken = this.token
    tokenInfo.refreshToken = this.refreshToken
    setToken(tokenInfo)
    console.log(getToken())
    console.log(getToken().refreshToken)
  }
}

export default LoginStore