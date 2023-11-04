let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

UI.build = (handler) => {
    let addItemButton = document.createElement('button');
    addItemButton.classList.add('add-item');
    addItemButton.textContent = '+';

    addItemButton.addEventListener('click', () => {
        if (newTaskActive) return;
        appContainer.appendChild(buildNewTaskInterface(handler))
        newTaskActive = true;
    });
    // here should be added the rest of the items stored
    appContainer.appendChild(addItemButton);
}

const buildNewTaskInterface = (handler) => {
    let newTaskContainer = div();
    let descriptionInput = document.createElement('input');
    let addButton = document.createElement('button')
    let cancelButton = document.createElement('button')

    newTaskContainer.classList.add('new-task');
    cancelButton.classList.add('new-task-button');
    descriptionInput.classList.add('new-task-description');

    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('placeholder', 'description')

    addButton.textContent = 'add';
    addButton.addEventListener('click', () => {
        handler.handleNewTaskInput({
            description: descriptionInput.value,
        });

        newTaskContainer.remove();
        newTaskActive = false;
    });

    cancelButton.textContent = 'cancel';
    cancelButton.addEventListener('click', () => {
        newTaskContainer.remove();
        newTaskActive = false;
    });

    newTaskContainer.appendChild(descriptionInput)
    newTaskContainer.appendChild(addButton);
    newTaskContainer.appendChild(cancelButton);

    return newTaskContainer;
}

const buildTask = (task) => {
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
    taskNoteContainer.appendChild(taskNotes);
    taskContainer.appendChild(taskNoteContainer);
    taskTagsContainer.appendChild(taskTags);
    taskContainer.appendChild(taskTagsContainer);
    taskContainer.appendChild(taskSpace);
    taskContainer.appendChild(taskState);
    taskContainer.appendChild(taskPriority);

    return taskContainer;
}

UI.addTaskToList = (task) => {
    appContainer.appendChild(buildTask(task));
}

const div = () => {
    return document.createElement('div');
}

export { UI };