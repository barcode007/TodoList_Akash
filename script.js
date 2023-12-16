document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask();
    });

    function addTask() {
        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <center><div style="display:flex;align-items:center;color:white;justify-content:space-evenly; margin-top:15px;"><span><strong>TASK NAME:</strong> ${taskName}</span>
            <span><strong>  DUE DATE:</strong> ${dueDate}</span>
            <span><strong>  PRIORITY:</strong> ${priority}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button></div></center> 
        `;

        taskList.appendChild(taskElement);
        taskForm.reset();
    }

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteBtn')) {
            deleteTask(e.target.parentElement);
        } else if (e.target.classList.contains('editBtn')) {
            editTask(e.target.parentElement);
        }
    });

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    function editTask(taskElement) {
        const taskNameSpan = taskElement.querySelector('span:first-child');
        const newTaskName = prompt('Edit Task Name:', taskNameSpan.textContent.split(': ')[1]);

        if (newTaskName !== null) {
            taskNameSpan.innerHTML = `<strong>Task Name:</strong> ${newTaskName}`;
        }
    }
});
