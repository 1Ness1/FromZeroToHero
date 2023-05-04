import axios from 'axios';

const API_ADDRESS = 'https://jsonplaceholder.typicode.com/todos/1';

interface TodoList {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `
  );
};

axios.get(API_ADDRESS).then((response) => {
  const todoList = response.data as TodoList;

  const { id, title, completed } = todoList;
  logTodo(id, title, completed);
});
