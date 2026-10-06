const input = document.querySelector("#taskInput");
const button = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const message = document.querySelector("#message");
const completedCount = document.querySelector("#completedCount");

const tasks = [];

let completedTasks = 0;

button.addEventListener("click", function() {
    const text = input.value;

if (text === "") {
    message.textContent = "Input must not be empty";
    message.classList.add("error-blink");
} else {    
    message.textContent = "";
    const task = {
        text:text,
        completed:false
    };
    tasks.push(task);

const li = document.createElement("li");
li.classList.add("fade-in");
li.textContent = text;

const deleteButton = document.createElement("button");
deleteButton.textContent = "🗑️";
deleteButton.classList.add("deleteButton");
li.appendChild(deleteButton);
deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (li.classList.contains("done")) {
        completedTasks--;
        completedCount.textContent = completedTasks + " completed";
    }
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);

    li.remove();
});

li.addEventListener("click", function () {
    if(li.classList.contains("done")) {
        li.classList.remove("done");
        task.completed = false;
        completedTasks--;
        completedCount.textContent = completedTasks + " completed";
    } else {
        li.classList.add("done");
        task.completed = true;
        completedTasks++;
        completedCount.textContent = completedTasks + " completed";
    }

});


taskList.appendChild(li);

}
input.value = ""
});

message.addEventListener("animationend", function() {
    message.classList.remove("error-blink");
});