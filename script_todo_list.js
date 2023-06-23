const todo_array = [];

displayTodo();

function displayTodo() {
  let todoListHTML = '';

  for (let i = 0; i < todo_array.length; i++) {
    const todoObject = todo_array[i];
    const {name, dueDate, dueTime} = todoObject; 

    const html = `
      <div>${i + 1}</div>
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <div>${dueTime}</div>
      <div>
        <button class="button-delete" onclick="todo_array.splice(${i}, 1); displayTodo();">
          Delete
        </button>
      </div>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todoList').innerHTML = todoListHTML;
}

function pushTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const timeInputElement = document.querySelector('.js-due-time-input');
  const todo = inputElement.value;
  const due_date = dateInputElement.value;
  const due_time = timeInputElement.value;

  todo_array.push({
    name: todo, 
    dueDate: due_date,
    dueTime: due_time
  });
  inputElement.value = '';

  displayTodo();
}