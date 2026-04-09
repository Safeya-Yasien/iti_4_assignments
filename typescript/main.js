var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pending";
    TaskStatus["InProgress"] = "In Progress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (title, description, deadline) {
        if (!title || !deadline)
            return;
        var newTask = {
            id: Date.now(),
            title: title,
            description: description,
            status: TaskStatus.Pending,
            deadline: deadline,
        };
        this.tasks.push(newTask);
        this.createTableRow(newTask);
    };
    TaskManager.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (t) { return t.id !== id; });
        var rowToRemove = document.getElementById("task-row-".concat(id));
        if (rowToRemove) {
            rowToRemove.remove();
        }
    };
    TaskManager.prototype.getTasks = function () {
        return __spreadArray([], this.tasks, true);
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.status = TaskStatus.Completed;
            var row = document.getElementById("task-row-".concat(id));
            if (row) {
                row.classList.add("task-completed");
                var statusCell = row.cells[2];
                statusCell.textContent = TaskStatus.Completed;
            }
        }
    };
    TaskManager.prototype.createTableRow = function (task) {
        var tableBody = document.getElementById("taskTableBody");
        var row = document.createElement("tr");
        row.id = "task-row-".concat(task.id);
        if (task.status === TaskStatus.Completed) {
            row.classList.add("task-completed");
        }
        row.innerHTML = "\n        <td>".concat(task.title, "</td>\n        <td>").concat(task.description, "</td>\n        <td>").concat(task.status, "</td>\n        <td>").concat(task.deadline, "</td>\n        <td>\n            <button class=\"done-btn\" onclick=\"handleCompleteTask(").concat(task.id, ")\">Done</button>\n            <button class=\"delete-btn\" onclick=\"handleDeleteTask(").concat(task.id, ")\">Delete</button>\n        </td>\n");
        tableBody.appendChild(row);
    };
    return TaskManager;
}());
var myManager = new TaskManager();
function handleAddTask() {
    var titleInput = document.getElementById("titleInput");
    var descInput = document.getElementById("descInput");
    var dateInput = document.getElementById("dateInput");
    myManager.addTask(titleInput.value, descInput.value, dateInput.value);
    titleInput.value = "";
    descInput.value = "";
    dateInput.value = "";
}
function handleDeleteTask(id) {
    myManager.deleteTask(id);
}
function handleCompleteTask(id) {
    myManager.completeTask(id);
}
