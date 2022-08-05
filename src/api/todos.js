import api from "./api";

export const getTodos = () => {
  return api.get("/todos");
};

export const addTodoItem = (text) => {
  return api.post("/todos", { text });
};
