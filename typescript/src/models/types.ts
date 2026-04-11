export enum TaskStatus {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed",
}

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    deadline: string;
}