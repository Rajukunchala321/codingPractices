import React, { Component } from 'react'
import axios from 'axios'
class IndexComponent extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response);
      this.setState({
        data: response.data
      })
    })
    .catch((error)=>{
     // console.log(error)
    })
  }
  render() {
    const {data}=this.state;
   // console.log(data)
    return (
      <>
      <h1>AIP Fetching...</h1>
      {
        data.map((each)=>{
         return <div key={each.id}>{each.title}</div>
        })
      }
      </>
    )
  }
}

export default IndexComponent
