// app.js

let todos = [];
let editingTodoId = null;

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const div = document.createElement('div');
    div.className = 'todo';
    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <strong>Status: ${todo.status}</strong><br/>
      <button onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function addOrUpdateTodo() {
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const status = document.getElementById('status').value;

  if (!title || !description) {
    alert('Please enter title and description');
    return;
  }

  const newTodo = { title, description, status };

  if (editingTodoId !== null) {
    todos[editingTodoId] = newTodo;
    editingTodoId = null;
  } else {
    todos.push(newTodo);
  }

  resetForm();
  renderTodos();
}

function editTodo(index) {
  const todo = todos[index];
  document.getElementById('title').value = todo.title;
  document.getElementById('description').value = todo.description;
  document.getElementById('status').value = todo.status;
  editingTodoId = index;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('status').value = 'pending';
}

renderTodos();
