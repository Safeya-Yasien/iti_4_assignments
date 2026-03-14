import { Trash } from "lucide-react";
import { useState } from "react";

const TaskItem = ({ taskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  console.log("isCompleted", isCompleted);

  if (!isVisible) return null;
  return (
    <div
      className={` bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-5 border border-stone-100 `}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3
            className={`text-lg font-bold text-stone-800 leading-tight ${isCompleted ? "line-through" : ""}`}
          >
            {taskName}
          </h3>
          <div className="flex items-center gap-2">
            <button
              className="text-xs font-medium cursor-pointer hover:text-green-500 transition-colors duration-300"
              onClick={() => setIsCompleted(true)}
            >
              {isCompleted ? "Completed" : "Mark as Completed"}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-xs font-medium cursor-pointer hover:text-red-500 transition-colors duration-300"
            >
              <Trash className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskItem;
