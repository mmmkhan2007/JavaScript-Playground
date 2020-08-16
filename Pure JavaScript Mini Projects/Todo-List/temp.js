// Objects
const domParser = new DOMParser();
const todosArr = loadAllTodosFromLocalStorage();

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter-todo');