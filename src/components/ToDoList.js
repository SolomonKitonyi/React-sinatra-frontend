import React, { useEffect, useState } from "react";
import NewTodo from "../NewTodo";
import ToDoItem from "./ToDoItem";

function ToDoList () {
    const [data,setData] = useState([])
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        fetch("https://sinatra-api-project.herokuapp.com/todos")
        .then(res => res.json())
        .then (data => setData(data) )
        .catch(err => console.log(err))
        
    },[refresh])
    
    return (
        <div >
            <NewTodo refresh={refresh} setRefresh={setRefresh}/>
            <ul className="list-div">{data.map(item => (
                <ToDoItem item = {item} key={item.id} refresh={refresh} setRefresh={setRefresh}/>
            ))}</ul>
        </div>
    )
}

export default ToDoList;