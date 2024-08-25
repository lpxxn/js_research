let o = {
  m () {
    let self = this
    console.log('m() this is ', this, 'self is o: ', self === o)
    f()
    function f () {
      console.log(self)
      console.log(self === o)
      console.log('f() this is ', this)
      console.log('f() this === o ', this === o)
    }
  }
}

o.m()
