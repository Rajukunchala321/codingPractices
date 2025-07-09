import React from "react";

class WithoutHook extends React.Component {
    constructor(){
        super()
        this.state ={
            count:0
        }
    }
    componentDidMount(){
        document.title =`you clicked ${this.state.count} times`
    }
    CountUpdate =()=>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    componentDidUpdate(){
        document.title = `You clicked ${this.state.count} times`
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.CountUpdate}>Click {count} times</button>
      </div>
    )
  }
}

export default WithoutHook