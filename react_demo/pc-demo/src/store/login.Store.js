
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class LoginStore {
  token = ''
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
    this.token = resp.data.data.token
    this.refreshToken = resp.data.data.refresh_token
    console.log(`token: ${this.token}, refreshToken: ${this.refreshToken}`)
  }
}

export default LoginStore