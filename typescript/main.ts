enum TaskStatus {
  Pending = "Pending",
  InProgress = "In Progress",
  Completed = "Completed",
}

interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  deadline: string;
}

class TaskManager {
  private tasks: ITask[] = [];

  addTask(title: string, description: string, deadline: string): void {
    if (!title || !deadline) return;

    const newTask: ITask = {
      id: Date.now(),
      title,
      description,
      status: TaskStatus.Pending,
      deadline,
    };
    this.tasks.push(newTask);
    this.createTableRow(newTask);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);

    const rowToRemove = document.getElementById(`task-row-${id}`);
    if (rowToRemove) {
      rowToRemove.remove();
    }
  }

  getTasks(): ITask[] {
    return [...this.tasks];
  }

  private createTableRow(task: ITask): void {
    const tableBody = document.getElementById(
      "taskTableBody",
    ) as HTMLTableSectionElement;
    const row = document.createElement("tr");

    row.id = `task-row-${task.id}`;

    row.innerHTML = `
      <td>${task.title}</td>
      <td>${task.description}</td>
      <td>${task.status}</td>
      <td>${task.deadline}</td>
      <td>
        <button class="delete-btn" onclick="handleDeleteTask(${task.id})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  }
}

const myManager = new TaskManager();

function handleAddTask() {
  const titleInput = document.getElementById("titleInput") as HTMLInputElement;
  const descInput = document.getElementById("descInput") as HTMLTextAreaElement;
  const dateInput = document.getElementById("dateInput") as HTMLInputElement;

  myManager.addTask(titleInput.value, descInput.value, dateInput.value);

  titleInput.value = "";
  descInput.value = "";
  dateInput.value = "";
}

function handleDeleteTask(id: number) {
  myManager.deleteTask(id);
}
