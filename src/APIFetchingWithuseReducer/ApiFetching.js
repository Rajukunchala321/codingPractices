import React,{useState, useEffect} from 'react'
import axios from 'axios'



function ApiFetching() {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
        console.log("API response",response.data);
        setPost(response.data);
        setLoading(false)
    }).catch((error)=>{
        console.log(error);
        setLoading(false)
        setPost({})
        setErrorMsg('Something went wrong');
    })
  },[])
  return (
   <>
    <div>ApiFetching</div>
    <div>{loading ? "Your Post Loading":  post.title } {errorMsg ? errorMsg: null}</div>
    </>
  )
}

export default ApiFetching