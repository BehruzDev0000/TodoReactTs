import { DeleteModalIcon } from "../../assets/icons";

const DeleteModal = ({ onCancel = () => {}, onConfirm = () => {} }) => {
  return (
    <div className="w-[420px] rounded-2xl bg-white p-6 text-center shadow-[0px_0px_100px_0px_#0000001A]">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
       <DeleteModalIcon/>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-gray-900">
        Delete this Todo
      </h2>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        This action cannot be undone. The item will be permanently removed.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={onCancel}
          className="px-5 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
