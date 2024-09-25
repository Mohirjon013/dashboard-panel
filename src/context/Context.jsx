import { createContext, useState } from "react";
import { json } from "react-router-dom";

export const Context = createContext()

export const TitleContext = ({children}) => {
    const [path, setPath] =useState("Overview")
    const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todo")) ||[])
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("user"))||[])
    localStorage.setItem("todo", JSON.stringify(todos))
    localStorage.setItem("user", JSON.stringify(users))

    function addTodo(body){
        setTodos([...todos, body])
    }
    function deleteTodo(id){
        const findArr = todos.findIndex(item => item.id == id)
        todos.splice(findArr,1)
        setTodos([...todos])
        
    }

    function deleteUsers(id){
        const findUser = todos.findIndex(item => item.id == id)
        users.splice(findUser,1)
        setUsers([...users])
    }
    return (
        <Context.Provider value={{path, setPath, addTodo, deleteTodo, deleteUsers, todos, setTodos, users, setUsers}} >{children}</Context.Provider>
    )
}