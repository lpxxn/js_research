import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }

  getUserInfo = async () => {
    const res = await http.get('/user/profile')
    console.log(res.data)
    this.userInfo = res.data
    console.log(this.userInfo)
  }
}

export default UserStore