let input = document.querySelector("input");
let createTaskButton = document.getElementById("click-create");
let allTasks = document.getElementById("newtaskarea");
let noTasks = document.getElementById("notasks");
let deleteTask = document.getElementsByClassName("close");



let addTask = (r) => {
        r.preventDefault();
        noTasks.remove();
        let task = input.value;

        allTasks.innerHTML += `<div class="alert alert-warning  toggleit" role="alert">
        ${task}; <button type="button" class="close deleteit" id="deleteTask" aria-label="Close" aria-hidden="true">
            &times;
        </button>
        </div>`;
        
}

createTaskButton.addEventListener('click', addTask);



document.addEventListener('click', function (t){
    if(t.target.classList.contains('toggleit')){
        t.target.classList.toggle("toggle-line");
    }
})

document.addEventListener('click', function (t){
    if(t.target.classList.contains('deleteit')){
        t.target.parentElement.remove();
    }
})
