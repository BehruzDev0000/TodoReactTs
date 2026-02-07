import { useContext } from "react"
import type { TodoType } from "../@types/TodoType"
import { Context } from "../context/Context"
import TodoItem from "./TodoItem"

const Todo = () => {
    const { todos } = useContext(Context)
    
    return (
    <div className="bg-indigo-500 p-5 rounded-md shadow-md max-w-[800px] mx-auto text-center">
            <h2 className="font-bold text-[30px] text-white">Todo List</h2>
      <div className="max-w-[50%] flex flex-col gap-4 mt-5 mx-auto">
        {todos.map((todo: TodoType) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
 
    </div>
    
  )
}

export default Todo