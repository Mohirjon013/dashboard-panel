import { createContext, useState } from "react";
import { json } from "react-router-dom";

export const Context = createContext()

export const TitleContext = ({children}) => {
    const [path, setPath] =useState("Overview")
    const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todo")) ||[])

    localStorage.setItem("todo", JSON.stringify(todos))


    function addTodo(body){
        setTodos([...todos, body])
    }
    function deleteTodo(id){
        const findArr = todos.findIndex(item => item.id == id)
        todos.splice(findArr,1)
        setTodos([...todos])
    }
    return (
        <Context.Provider value={{path, setPath, addTodo, deleteTodo, todos, setTodos}} >{children}</Context.Provider>
    )
}