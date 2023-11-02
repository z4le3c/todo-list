let UI = {}

let appContainer = document.querySelector('#app');

UI.addTask = (task) => {
    let taskContainer = div();
    let taskDescription = div();
    let taskDate = div();
    let taskPriority = div();
    let taskNoteContainer = div();
    let taskNotes = div();
    let taskState = div();
    let taskSpace = div();
    let taskTagsContainer = div();
    let taskTags = div(); 

    taskContainer.classList.add('task-container');
    taskDescription.classList.add('task-description');
    taskDate.classList.add('task-date');
    taskPriority.classList.add('task-priority');
    taskNoteContainer.classList.add('task-notes-container');
    taskNotes.classList.add('task-notes');
    taskState.classList.add('task-state');
    taskSpace.classList.add('task-space');
    taskTagsContainer.classList.add('task-tags-container')
    taskTags.classList.add('task-tags');

    taskDescription.textContent = task.description
    taskDate.textContent = task.date;
    taskPriority.textContent = task.priority;
    taskNotes.textContent = task.notes;
    taskState.textContent = task.state;
    taskSpace.textContent = task.space;
    taskTags.textContent = task.tags;

    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskPriority);
    taskNoteContainer.appendChild(taskNotes);
    taskContainer.appendChild(taskNoteContainer);
    taskContainer.appendChild(taskState);
    taskContainer.appendChild(taskSpace);
    taskTagsContainer.appendChild(taskTags);
    taskContainer.appendChild(taskTagsContainer);

    appContainer.appendChild(taskContainer);
}

const div = () => {
    return document.createElement('div');
}

export { UI };