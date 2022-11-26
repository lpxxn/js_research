
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class LoginStore {
  token = ''
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
    this.token = resp.token
  }
}

export default LoginStore