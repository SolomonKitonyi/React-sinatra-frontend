import React, { useState } from "react";

function ToDoItem ({item,refresh,setRefresh}) {
    const [name,setName] = useState("")
    function deleteItem () {
        alert("Delete Success")
        setRefresh(!refresh)
    }
    function handleUpdate(){
        setRefresh(!refresh)
        setName("")
        alert("Update Success")
    }
    function handleDelete() {
        fetch(`https://sinatra-api-project.herokuapp.com/todos/${item.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            }
        })
        .then(res => res.json())
        .then(deleteItem)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: name,
            description: item.description
        }
        fetch(`https://sinatra-api-project.herokuapp.com/todos/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(handleUpdate)
    }
    return (
        <div className="item-div">
            <h1>{item.name}</h1>
            <h5>{item.description}</h5>
            <form onSubmit={handleSubmit}>
                <input placeholder="Upadate Name" value={name} required onChange={e => setName(e.target.value)}/>
                <br />
                <button style={{background: "green"}}>Update</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ToDoItem;