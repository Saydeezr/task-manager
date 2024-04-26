// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
const droppableLane = document.getElementById('.droppable-area')
const newTask = []

document.getElementById("addTask").addEventListener('click', handleAddTask);

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = "";
    for (let i = 0; i < 5; i++) {
         id += Math.floor(Math.random()*10);
    } console.log(id)
      return id;
} 
 generateTaskId();

   
// Todo: create a function to create a task card
function createTaskCard(task) {
     const cardDiv = $('<div>').addClass("card w-75 my-3").attr("data-task-id", task.id);

     const cardHeader =$('<div>').addClass('card-header').text(task.title);
     const cardBody = $("<div>").addClass("card-body");
     const description = $('<p>').addClass('card-text').text(task.description);
     const deadline = $('<p>').addClass('card-text').text('Deadline: ' + task.date);
     const deleteButton = $('<button>').addClass('btn btn-danger').text('Delete');
     deleteButton.click(handleDeleteTask)
     cardBody.append(description, deadline, deleteButton);
     cardDiv.append(cardHeader, cardBody);

     if(task.deadline && task.status !== 'done'){
        let taskDeadline = dayjs(task.date, 'YYYY-MM-DD');
        let currentDay = dayjs();

    if (task.deadline.isSame(currentDay, 'day')) {
        cardBody.addClass('bg-warning text-white')
    } else if (taskDeadline.isAfter(currentDay, 'day')){
        cardBody.addClass('bg-light text-dark')
    } else {
        cardBody.addClass('bg-danger text-white')
    }}  return cardDiv
};

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const taskBoard = $('.task-board');
    taskBoard.empty();

    if (taskList) {
        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i];
            const taskCard = createTaskCard(task);
            taskCard.draggable({
                revert: "invalid",
                cursor: "move"
            }); 
            
            if (task.status === "to-do") {
                $("#todo-cards").append(taskCard);
            } else if (task.status === "in-progress") {
                $("#in-progress-cards").append(taskCard);
            } else if (task.status === "done") {
                $("#done-cards").append(taskCard);
            }

            $('.draggable').draggable({
                opacity: 0.5,
                zIndex: 100
            })
            console.log(taskCard);
            taskBoard.append(taskCard);
        }
    }
}


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
  taskList.push(task);
  const jsonTask = JSON.stringify(taskList);
  localStorage.setItem('tasks', jsonTask);
  newTask.push(task); 
 
  renderTaskList();
};

// Todo: create a function to handle deleting a task
function handleDeleteTask(id){
    const taskIndex = newTask.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        newTask.splice(taskIndex, 1);
    } else {
        console.log('Task does not exist');
    }
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
//     let taskCard = ui.draggable;
//     let newStatusLane = $(this);
//     newStatusLane.append(taskCard);
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  renderTaskList(); 
  $('.droppable-area').droppable({
    drop: handleDrop
  });
});