import React, { createContext } from "react"
import ComA from "./ContextSon"

export const { Provider, Consumer } = createContext()


class ContextFather extends React.Component {
  state = {
    msg: 'this is a message'
  }
  render () {
    return (
      <div>
        <h2>通过Context传递数据给孙子</h2>
        <Provider value={this.state.msg}>
          <ComA />
        </Provider>
      </div>
    )
  }
}

export default ContextFather