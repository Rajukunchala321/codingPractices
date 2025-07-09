import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SinglePostDataFetch() {
    const [id , setId] = useState(1);
    const [post, setPost]=useState({})
    const [submitedId, setSumitedId] =useState(1)
     
    const handleClick =()=>{
        setSumitedId(id);
    }
    const handleOnChange =(e)=>{
        setId(e.target.value);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${submitedId}`)
        .then((response)=>{
            console.log(response.data)
            setPost(response.data)
        }).catch((error)=>{
            console.log(error.status)
        })
    }, [submitedId])
  return (
    <div>
        <input type='number' value={id} onChange={handleOnChange} />
        <button onClick={handleClick}>FetchData</button>
      <h2>Post title{post.title}</h2>
    </div>
  )
}

export default SinglePostDataFetch
