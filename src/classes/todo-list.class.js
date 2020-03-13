import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocaclStorage();
    }

    borrarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocaclStorage();

    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
        this.guardarLocaclStorage();
    }

    borrarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocaclStorage();
    }

    guardarLocaclStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // } else {
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

        // map sirve para barrer el arreglo y se lo enviamos al todo en la función fromJson
        this.todos = this.todos.map(Todo.fromJson);

    }


}