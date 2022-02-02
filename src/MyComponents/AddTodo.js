import React, { useState } from 'react';


export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be Blank")
        }
        else{
            props.addTodo(title,desc);
            settitle("");
            setdesc("");
         }
      
    }
  return(
    <div className='container' my-3="true">
    <h3> Add Todo</h3>
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo Description</label>
      <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)}  className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
  </form>
    </div>
  ) 
};
