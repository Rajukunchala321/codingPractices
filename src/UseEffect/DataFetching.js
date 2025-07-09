import React, {useState, useEffect} from 'react'
import axios from 'axios';
function DataFetching() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log("response", response);
            setPosts(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])

  return (
    <div>
    {
        posts.map(post=>(
            <div key={post.id}>{post.title}</div>
        ))
    }
    </div>
  )
}

export default DataFetching
