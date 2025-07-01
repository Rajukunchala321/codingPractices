import React, { Component } from 'react'
import axios from 'axios';

class PostComponent extends Component {
    constructor(){
        super()
        this.state={
            userId:"",
            title:"",
            body:"",
        }
    }
    
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then((response)=>{
            console.log(response);
        }).catch(error=>{
            console.log(error)
        })
    }

  render() {
    const {userId, title, body} =this.state;
    return (
      <div>
        <form onClick={this.handleSubmit}>
            <input type='text' name='userId' value={userId} onChange={this.handleOnChange} />
            <input type='text' name='title' value={title}  onChange={this.handleOnChange} />
            <input type='text' name='body' value={body} onChange={this.handleOnChange}  />
            <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default PostComponent
