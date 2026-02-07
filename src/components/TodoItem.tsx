import { useContext, useState } from "react";
import type { TodoType } from "../@types/TodoType";
import { DeleteIcon, EditIcon } from "../assets/icons";
import Button from "./Button";
import { Context } from "../context/Context";
import Modal from "./modal/Modal";
import DeleteModal from "./modal/DeleteModal";
import EditModal from "./modal/EditModal";
const TodoItem = ({ todo }: { todo: TodoType }) => {
  const { toggleTodo, deleteTodo ,updateTodo} = useContext(Context);
  const [showModal, setShowModal] = useState<boolean>(false);
    const [showupdateModal, setupdateShowModal] = useState<boolean>(false);
  const deleteTodoHandler = () => {
    deleteTodo(todo.id);
    setShowModal(false);
  };
  const updateTodoHandler=(data:{id:number,title:string,completed:boolean})=>{
    updateTodo(data.id,data.title,data.completed);
    setupdateShowModal(false);
  }
  return (
    <div
      key={todo.id}
      className="w-full flex items-center justify-between rounded-md bg-slate-200 px-4 py-2 ring-2 ring-slate-300/70"
    >
      <div className="flex items-center gap-2">
        <input
          checked={todo.completed}
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 accent-blue-600 rounded-md cursor-pointer"
        />
        <h3 className="text-white text-[20px] font-medium">{todo.title}</h3>
      </div>
      <div className="flex  gap-3">
        <Button extraStyle="bg-slate-300  shadow-md !rounded-md !px-5 !py-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)] ring-2 ring-white/30 hover:text-white hover:bg-slate-400 cursor-pointer" onClick={() => setupdateShowModal(true)}>
          <EditIcon />
        </Button>
        <Button
          extraStyle="bg-red-400  shadow-md !rounded-md !px-5 !py-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)] ring-2 ring-red-500/30 hover:text-white hover:bg-red-500 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <DeleteIcon />
        </Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <DeleteModal
          onCancel={() => setShowModal(false)}
          onConfirm={() => deleteTodoHandler()}
        />
      </Modal>
      <Modal showModal={showupdateModal} setShowModal={setupdateShowModal}>
        <EditModal todo={todo} onCancel={() => setupdateShowModal(false)} onConfirm={(data) => updateTodoHandler(data) } />
      </Modal>
    </div>
  );
};

export default TodoItem;
