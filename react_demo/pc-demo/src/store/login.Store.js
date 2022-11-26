
import { makeAutoObservable } from 'mobx'

class LoginStore {
  token = ''
  constructor() {
    // 
    makeAutoObservable(this)
  }
  setToken ({ mobile, code }) {

  }
}

export default LoginStore