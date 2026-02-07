import { useState } from "react";
import type { TodoType } from "../../@types/TodoType";

type EditModalProps = {
  todo: TodoType;
  onCancel: () => void;
  onConfirm: (payload: {
    id: number;
    title: string;
    completed: boolean;
  }) => void;
};

const EditModal = ({ todo, onCancel, onConfirm }: EditModalProps) => {
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm({ id: todo.id, title: title, completed });
  };

  return (
    <div className="w-[420px] rounded-2xl p-5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <h2 className="font-semibold text-[28px] text-slate-900">Edit Todo</h2>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Edit Todo"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-500/30"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="flex items-center gap-3 text-slate-700">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="w-4 h-4 accent-blue-600 cursor-pointer"
          />
          {completed ? "Completed" : "Not Completed"}
        </label>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
