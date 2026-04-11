var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CreatedAt } from "./decorators/Logger.js";
import { TaskStatus } from "./models/types.js";
import { BaseRepository } from "./repositories/BaseRepository.js";
let TaskManager = class TaskManager {
    constructor() {
        this.repo = new BaseRepository();
    }
    addTask(title, description, deadline) {
        if (!title || !deadline)
            return;
        const newTask = {
            id: Date.now(),
            title,
            description,
            status: TaskStatus.Pending,
            deadline,
        };
        this.repo.add(newTask);
        this.createTableRow(newTask);
    }
    deleteTask(id) {
        this.repo.delete(id);
        const rowToRemove = document.getElementById(`task-row-${id}`);
        if (rowToRemove) {
            rowToRemove.remove();
        }
    }
    getTasks() {
        return [...this.repo.getAll()];
    }
    completeTask(id) {
        const task = this.repo.findById(id);
        if (task) {
            task.status = TaskStatus.Completed;
            const row = document.getElementById(`task-row-${id}`);
            if (row) {
                row.classList.add("task-completed");
                const statusCell = row.cells[2];
                statusCell.textContent = TaskStatus.Completed;
            }
        }
    }
    createTableRow(task) {
        const tableBody = document.getElementById("taskTableBody");
        const row = document.createElement("tr");
        row.id = `task-row-${task.id}`;
        if (task.status === TaskStatus.Completed) {
            row.classList.add("task-completed");
        }
        row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.status}</td>
        <td>${task.deadline}</td>
        <td>
            <button class="done-btn" onclick="handleCompleteTask(${task.id})">Done</button>
            <button class="delete-btn" onclick="handleDeleteTask(${task.id})">Delete</button>
        </td>
`;
        tableBody.appendChild(row);
    }
};
TaskManager = __decorate([
    CreatedAt
], TaskManager);
const myManager = new TaskManager();
const addButton = document.getElementById("add");
if (addButton) {
    addButton.addEventListener("click", () => {
        const titleInput = document.getElementById("titleInput");
        const descInput = document.getElementById("descInput");
        const dateInput = document.getElementById("dateInput");
        myManager.addTask(titleInput.value, descInput.value, dateInput.value);
        titleInput.value = "";
        descInput.value = "";
        dateInput.value = "";
    });
}
window.handleDeleteTask = (id) => {
    myManager.deleteTask(id);
};
window.handleCompleteTask = (id) => {
    myManager.completeTask(id);
};
