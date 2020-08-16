// Objects
const domParser = new DOMParser();
const todosArr = loadAllTodosFromLocalStorage();

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', populateTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCheck);
todoFilter.addEventListener('change', showFilteredTodos);