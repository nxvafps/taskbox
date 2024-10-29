import { createAsyncThunk } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  state: string;
}

interface TaskAPI {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTasks = createAsyncThunk<Task[]>("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1"
  );
  const data: TaskAPI[] = await response.json();
  const result: Task[] = data.map((task) => ({
    id: `${task.id}`,
    title: task.title,
    state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
  }));
  return result;
});
