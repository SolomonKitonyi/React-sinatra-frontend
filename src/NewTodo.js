import React, { useState } from "react";

function NewTodo ({refresh,setRefresh}) {
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")

    function handleCreate () {
        setRefresh(!refresh)
        setName("")
        setDescription("")
        alert("Todo created")
    }
    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name,
            description
        }
        fetch("https://sinatra-api-project.herokuapp.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(handleCreate)
    }
    return (
        <div className="new-item-div">
            <h1>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" required value={name} onChange = {e => setName(e.target.value)}/>
                <br />
                <input placeholder="Description" required value={description} onChange={e => setDescription(e.target.value)}/>
                <br />
                <button style={{background: "blue"}}>Create</button>
            </form>
        </div>
    )
}

export default NewTodo;