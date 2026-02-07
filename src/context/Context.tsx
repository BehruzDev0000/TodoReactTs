import { createContext, type Dispatch, type ReactNode, type SetStateAction, useState} from "react";
import type { TodoType } from "../@types/TodoType";


const todos: TodoType[] = [
    { id: 1, title: "Todo 1", completed: true },
    { id: 2, title: "Todo 2", completed: false },
];
interface ContextType{
    todos: TodoType[];
    setTodos: Dispatch<SetStateAction<TodoType[]>>;
    toggleTodo:(todoId:number)=>void;
    updateTodo:(todoId:number, text:string,completed:boolean)=>void;
    deleteTodo:(todoId:number)=>void;
    createTodo:(text:string)=>void;
    
}
export const Context = createContext({} as ContextType);

export const TodoContext=({children}:{children:ReactNode})=>{
    const [allTodos, setAllTodos] = useState<TodoType[]>(todos);

    const updateTodo = (id: number, text: string,completed:boolean) => {
        const todo = allTodos.find((todo: TodoType) => todo.id === id);
        if(todo){
            todo.title = text;
            todo.completed = completed;
        }
        setAllTodos(allTodos);
    
};
    const createTodo=(text:string)=>{
        const newTodo:TodoType={id:allTodos.length+1,title:text,completed:false}
        setAllTodos([...allTodos, newTodo]);
    }
    const deleteTodo = (id: number) => {
        
        setAllTodos(allTodos.filter((todo: TodoType) => todo.id !== id));
    };

    const toggleTodo = (todoId: number) => {
        setAllTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };


  
    return <Context.Provider value={{todos:allTodos, setTodos:setAllTodos, toggleTodo,updateTodo,deleteTodo,createTodo}}>{children}</Context.Provider>
}



