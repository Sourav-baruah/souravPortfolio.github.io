let todoList = [{
  task: 'make dinner' , 
  dueDate: '31-07-2023'
}, {
   task: 'watch movie',
   dueDate: '31-07-2023'
  }];
  
renderTodoList();

function renderTodoList(){
    let todoListHtml = '';

    for(let i=0;i<todoList.length;i++){
      let todoObject = todoList[i];
      const task = todoObject.task;
      const dueDate = todoObject.dueDate;
      let html =
       `
       <div>${task}</div>
       <div>${dueDate}</div>
       <button onclick=" todolist.splice(${i}, 1)
       renderTodoList();
       " class="delete-button"> Delete</button>
       `;
      todoListHtml += html;
      }
        console.log(todoListHtml);

        document.querySelector('.js-todo-list')
          .innerHTML = todoListHtml;
}

function addtodo(){
  let inputElement = document.querySelector('.js-button');
  let task = inputElement.value;

  let dateInputElement = document.querySelector('.js-date');
  let dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    task,
    dueDate
});
  console.log(todoList);

  // to reset the placeholder text after adding
  inputElement.value ='';
  renderTodoList();

 }
