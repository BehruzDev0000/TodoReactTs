import { useContext, useState, type SubmitEvent } from "react";
import { Context } from "../context/Context";

const TodoForm = () => {
  const { createTodo } = useContext(Context);
  const [uncorrect, setUnCorrect] = useState<boolean>(false);
  const addTodo = (e: SubmitEvent<HTMLFormElement>) => {
    const text = e.target.text.value.trim();
    e.preventDefault();
    if (text.length < 4) {
      setUnCorrect(true);
  setTimeout(() => setUnCorrect(false), 2500);
    } else {
      setUnCorrect(false);
      createTodo(text);
      e.target.reset();
    }
  };
  return (
    <div className="max-w-[800px] mx-auto bg-slate-200 p-5 rounded-md shadow-md">
      <h2 className="text-white text-[30px] font-semibold tracking-tight text-center">
        Create Todo
      </h2>
      {uncorrect && (
        <p className="text-red-400 text-[20px] mt-2 text-center font-semibold tracking-tight text-center">
          Please enter a valid todo min 4 characters
        </p>
      )}
      <form
        className="flex items-center  gap-4 mt-[20px] w-[60%] mx-auto"
        onSubmit={addTodo}
        autoComplete="off"
      >
        <input
          type="text"
          name="text"
          placeholder="Enter todo text"
          className="w-[80%] px-2 py-3 border-black/20 border-slate-600/20 rounded-md border-[2px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-black/70 placeholder:text-[15px]"
        />
        <button
          type="submit"
          className="px-4 py-3 rounded-md bg-blue-500 text-white font-semibold w-[20%] ring-2 ring-white/20 hover:bg-transparent hover:text-blue-500 hover:ring-white/50 cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
