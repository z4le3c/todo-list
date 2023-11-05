let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

let _handler;

UI.setHandler = (handler) => {
    _handler = handler;
}

UI.createBaseInterface = (currentSpaceName) => {
    let spaceNameDiv = buildElement('div', currentSpaceName, 'space-name-div');
    let addItemButton = buildElement('button', '+', 'add-item-button');

    addItemButton.addEventListener('click', () => {
        if (newTaskActive) return;
        appContainer.appendChild(buildNewTaskInterface())
        newTaskActive = true;
    });
    // here should be added the rest of the items stored
    appContainer.appendChild(spaceNameDiv);
    appContainer.appendChild(addItemButton);
}

UI.createTaskList = (taskList) => {
    let oldTask = document.querySelectorAll('.task-container');

    for (const taskElement of oldTask) {
        taskElement.remove();
    }

    for (const task of taskList) {
        appContainer.appendChild(buildTask(task));
    }
}

const buildNewTaskInterface = () => {
    let newTaskContainer = div();
    let descriptionInput = buildElement('input', '', 'task-description', 'description-input');
    let spaceSelect = buildSpaceSelect();
    let addButton = buildElement('button', 'add', 'new-task-button')
    let cancelButton = buildElement('button', 'cancel', 'new-task-button')

    newTaskContainer.classList.add('new-task-container');

    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('placeholder', 'description')

    addButton.addEventListener('click', () => {
        if (spaceSelect.value == '') return;

        _handler.handleNewTaskInput({
            description: descriptionInput.value,
            space: spaceSelect.value,
        });

        newTaskContainer.remove();
        newTaskActive = false;
    });

    cancelButton.addEventListener('click', () => {
        newTaskContainer.remove();
        newTaskActive = false;
    });

    newTaskContainer.appendChild(descriptionInput)
    newTaskContainer.appendChild(spaceSelect);
    newTaskContainer.appendChild(addButton);
    newTaskContainer.appendChild(cancelButton);

    return newTaskContainer;
}

const buildSpaceSelect = () => {
    let select = buildElement('select', '', 'space-select');

    let spacesList = _handler.getSpacesList();

    for (const space of spacesList) {
        let option = document.createElement('option');
        option.setAttribute('value', space);
        option.textContent = space;
        
        select.appendChild(option);
    }

    return select;
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

const buildElement = (type, text, ...classes) => {
    let element = document.createElement(type);

    for (const cssClass of classes) {
        element.classList.add(cssClass);
    }

    element.textContent = text;

    return element;
}

const div = () => {
    return document.createElement('div');
}

export { UI };