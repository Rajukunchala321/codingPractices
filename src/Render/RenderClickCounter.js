import React, { Component } from 'react'

class RenderClickCounter extends Component {
  render() {
    const {handleCounter, count}=this.props
    return (
      <div>
        <button onClick={handleCounter}>Render Click {count} time</button>
      </div>
    )
  }
}

export default RenderClickCounter
