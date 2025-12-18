const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Mark task as completed
    li.querySelector('.task-text').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addTask();
});
