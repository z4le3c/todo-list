let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

let _handler;

UI.setHandler = (handler) => {
    _handler = handler;
}

UI.createBaseInterface = () => {
    let spaceNameSelect = buildSpaceSelect('space-name-select');
    spaceNameSelect.addEventListener('click', () => { 
        _handler.setCurrentSpace(spaceNameSelect.value);
    })

    let addItemButton = buildElement('button', '+', 'add-item-button');

    addItemButton.addEventListener('click', () => {
        if (newTaskActive) return;
        appContainer.appendChild(buildNewTaskInterface())
        newTaskActive = true;
    });
    // here should be added the rest of the items stored
    appContainer.appendChild(spaceNameSelect);
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
    let spaceSelect = buildSpaceSelect('space-select');
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

const buildSpaceSelect = (...cssClasses) => {
    let select = buildElement('select', '', ...cssClasses);

    let spacesList = _handler.getSpacesList();

    let option = document.createElement('option');
    option.setAttribute('value', _handler.getCurrentSpace());
    option.textContent = _handler.getCurrentSpace();
    select.appendChild(option);

    for (const space of spacesList) {
        if (space == _handler.getCurrentSpace()) continue;

        option = document.createElement('option');
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