import TaskItem from "./TaskItem";

const ToDo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
      <TaskItem taskName="Task 1" />
      <TaskItem taskName="Task 2" />
      <TaskItem taskName="Task 3" />
      <TaskItem taskName="Task 4" />
    </div>
  );
};
export default ToDo;
