import { crearTodoHtml } from './js/componentes';
import { TodoList, Todo } from './classes';

import './style.css';

export const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);



crearTodoHtml(tarea);