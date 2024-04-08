// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const newTask = []

document.getElementById('formModal').addEventListener('submit', handleAddTask);

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = "";
    for (let i = 0; i < 5; i++) {
         id += Math.floor(Math.random()*10);
    }
      return id;
} 
 generateTaskId();

   
// Todo: create a function to create a task card
function createTaskCard(task) {
     const cardDiv = $('<div>')
     .addClass("card w-75 my-3")
     .attr("data-task-id", task.id);

     const cardHeader =$('<div>').addClass('card-header').text(task.title);
     const cardBody = $("<div>").addClass("card-body");
     const description = $('<p>').addClass('card-text').text(task.description);
     const deadline = $('<p>').addClass('card-text').text('Deadline: ' + task.date);
 
     cardBody.append(description, deadline);
     cardDiv.append(cardHeader, cardBody);
     return cardDiv;
    };


// Todo: create a function to render the task list and make cards draggable
 function renderTaskList(){ 
    const taskBoard = $('#task-board');
    taskBoard.empty();
   
    taskList.forEach(task => {
    const taskCard = createTaskCard(task);
});

    taskCard.draggable({
    revert: "invalid",
    cursor: "move"
});
    taskBoard.append(taskCard);
 };


// Todo: create a function to handle adding a new task
function handleAddTask(event){
   event.preventDefault();

   const title = $('#title').val();
    const date = $('#date').val();
    const description = $('#description').val();

    if (!title || !date || !description) {
        alert('Please fill out all fields');
        return;
    }

   const task = {
    id : generateTaskId(),
    title : title,
    date : date,
    description : description,
   status: "to-do",
  };
  newTask.push(task); 
};

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const taskIndex = newTask.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        newTask.splice(taskIndex, 1);
    } else {
        console.log('Task not found');
    }
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

