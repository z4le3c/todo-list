let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

let _handler;

UI.setHandler = (handler) => {
    _handler = handler;
}

UI.build = () => {
    let addItemButton = document.createElement('button');
    addItemButton.classList.add('add-item');
    addItemButton.textContent = '+';

    addItemButton.addEventListener('click', () => {
        if (newTaskActive) return;
        appContainer.appendChild(buildNewTaskInterface(_handler))
        newTaskActive = true;
    });
    // here should be added the rest of the items stored
    appContainer.appendChild(addItemButton);
}

const buildNewTaskInterface = () => {
    let newTaskContainer = div();
    let descriptionInput = document.createElement('input');
    let addButton = document.createElement('button')
    let cancelButton = document.createElement('button')

    newTaskContainer.classList.add('new-task-container');
    addButton.classList.add('new-task-button');
    cancelButton.classList.add('new-task-button');
    descriptionInput.classList.add('task-description');
    descriptionInput.classList.add('description-input');

    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('placeholder', 'description')

    addButton.textContent = 'add';
    addButton.addEventListener('click', () => {
        _handler.handleNewTaskInput({
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
    let taskContainer = buildElement('div','', 'task-container');
    let taskDescription = buildElement('div', task.description, 'task-description');
    let taskDetails = buildElement('div', 'Details', 'task-details');
    let taskDeleteButton = buildElement('button', 'Delete', 'task-delete');

    taskDeleteButton.addEventListener('click', () => {
        _handler.handleDeletion(task);
        taskContainer.remove();
    });

    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(taskDeleteButton);

    return taskContainer;
}

UI.addTaskToList = (task) => {
    appContainer.appendChild(buildTask(task));
}

const buildElement = (type, text, _class) => {
    let element = document.createElement(type);

    element.classList.add(_class);

    element.textContent = text;

    return element;
}

const div = () => {
    return document.createElement('div');
}

export { UI };