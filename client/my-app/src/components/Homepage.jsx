import React from "react";
import { Navbar } from "./Navbar";
import styles from "../styles/homepage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Homepage = () => {
  const auth = useSelector((state) => state.auth);
  const userId = useSelector((state) => state.auth.userId);
  // const todos = useSelector((state) => state.todos);
  // const [main,setMain]=useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("auth",auth);
  if (!auth.login) {
    setTimeout(() => {
      navigate("/auth/login");
    }, 1000);
  }

  const [title, setTitle] = useState("");
  const [data,setData]=useState({});
  

  // useEffect(() => {
  //   dispatch(gettodos(userId));
  // }, []);

  const handleSubmit = () => {
    let obj = { title, userId };
    if (!title) {
      alert("add task");
    }
    // dispatch(addtodo(obj));
    // setTitle("")
  };

  // console.log("todos", todos);

  // const handleDelete = (id) => {
  //   dispatch(deletetodo(id));
  //   setTimeout(() => {
  //     dispatch(gettodos(userId));
  //   }, 100);
  // };

  const handleEdit=(id)=>{
     
  }
  // const handleStatus=(id)=>{
  //   dispatch(updateStatus(id))
  // }

  return (
    <>
      <Navbar prop={auth} />
      <h3 style={{ marginLeft: "600px" }}></h3>
      <div id={styles.tododiv}>
        <label>User Details</label>
        {/* <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        {/* <button onClick={handleSubmit}>Add todo</button> */}
      </div>
      <div id={styles.listdiv}>
        <div>Name:{auth.name}</div>
        <div>Token:{auth.token}</div>
        <div>UserId:{auth.userId}</div>
        <div>Login Status:Logged in</div>
        {/* {todos.map((e) => (
          <>
                <div>
                <div key={e._id}> {e.title} </div> 
                <div>
                <button onClick={() => handleEdit(e._id)} >Edit</button>
                <button onClick={() => handleStatus(e._id)}>Done</button>
                <button onClick={() => handleDelete(e._id)}>delete</button>
                </div>
                </div>
          </>
        ))} */}
      </div>
    </>
  );
};
