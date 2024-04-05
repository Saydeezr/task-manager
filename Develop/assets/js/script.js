// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let eachTask = ["title", "date","description"];

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = "";
    for (let i = 0; i < 5; i++) {
         id += Math.floor(Math.random()*10);
    }
      console.log("id", id)
} 
 generateTaskId();


// Todo: create a function to create a task card
function createTaskCard(task) {
     const cardDiv = $(`<div>${taskData}</div>`)
    };


// Todo: create a function to render the task list and make cards draggable
 function renderTaskList(){ //event listener "click"
  for (let i = 0; i < eachTask.length; i++) {
    const task = eachTask[i];
    console.log('task', task)
  }
 };


// Todo: create a function to handle adding a new task
function handleAddTask(event){
   event.preventDefault()
   const taskData = {
    id : generateTaskId(),
    title : $('#title').val(),
    date : $('#date').val(),
    description : $('#description').val(),
   status: "to-do"
 
}};

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

