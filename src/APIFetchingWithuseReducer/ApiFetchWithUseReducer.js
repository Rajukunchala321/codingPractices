import React, { useEffect, useReducer } from "react";
import axios from 'axios'

const initalState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_FAILD":
      return {
        loading: true,
        post: {},
        error: "Something went wrong",
      }
    default:
        return state  
  }
};

function ApiFetchWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILD" });
      });
  }, []);
  return (
    <div>
      ApiFetchWithUseReducer{" "}
      <div>
        {state.loading ? "Your Post Loading" : state.post.title}{" "}
        {state.errorMsg ? state.errorMsg : null}
      </div>
    </div>
  );
}

export default ApiFetchWithUseReducer;
