let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

let _handler;

UI.setHandler = (handler) => {
    _handler = handler;
}

UI.createBaseInterface = () => {
    let spaceNameSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'space-header-select',
    );

    spaceNameSelect.addEventListener('input', () => { 
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
    let newTaskContainer = buildElement('div','','new-task-container');
    let descriptionInput = buildElement('input', '', 'task-description', 'description-input');
    let spaceSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'new-task-space-select',
    );
    let addButton = buildElement('button', 'add', 'new-task-button')
    let cancelButton = buildElement('button', 'cancel', 'new-task-button')
    let dateInput = buildElement('input','','date-input');

    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('placeholder', 'description')

    dateInput.setAttribute('type', 'date');

    addButton.addEventListener('click', () => {
        if (spaceSelect.value == '') return;

        _handler.handleNewTaskInput({
            description: descriptionInput.value,
            space: spaceSelect.value,
            date: dateInput.value,
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
    newTaskContainer.appendChild(dateInput);
    return newTaskContainer;
}

const buildSelect = (defaultOption, itemList, ...cssClasses) => {
    let select = buildElement('select', '', ...cssClasses);

    let option = document.createElement('option');
    option.setAttribute('value', defaultOption);
    option.textContent = defaultOption;
    select.appendChild(option);

    for (const item of itemList) {
        if (item == defaultOption) continue;

        option = document.createElement('option');
        option.setAttribute('value', item);
        option.textContent = item;
        select.appendChild(option);
    }

    return select;
}

const buildTask = (task) => {
    let taskContainer = buildElement('div','', 'task-container');
    let taskDescription = buildElement('input', '', 'task-description', 'description-input');
    let taskDetails = buildElement('button', 'Details', 'task-details');
    let taskDeleteButton = buildElement('button', 'Delete', 'task-delete');
    let taskState = buildSelect(task.state, _handler.getStates(), 'task-state')
    let taskDate = buildElement('input','','date-input');

    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('value', task.description);
    taskDescription.addEventListener('input', () => {
        _handler.updateTask(task, {description:taskDescription.value})
    })

    taskState.addEventListener('input', () => {
        _handler.updateTask(task, {state: taskState.value});
    });

    taskDate.setAttribute('type', 'date');
    taskDate.setAttribute('value', task.date);
    taskDate.addEventListener('input', () => {
        _handler.updateTask(task, {date:taskDate.value})
    });

    taskDetails.addEventListener('click', () => {
        if (taskDetails.textContent == 'Details') {
            taskDetails.textContent = 'Less';
            
            taskDeleteButton.remove();
            taskState.remove();

            taskContainer.appendChild(taskDate)
            taskContainer.appendChild(taskState)

        } else if(taskDetails.textContent == 'Less') {
            taskDetails.textContent = 'Details';

            taskDate.remove();

            taskContainer.appendChild(taskDeleteButton)
            taskContainer.appendChild(taskState)
        }
    });

    taskDeleteButton.addEventListener('click', () => {
        _handler.handleDeletion(task);
        taskContainer.remove();
    });

    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(taskDeleteButton);
    taskContainer.appendChild(taskState);

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

export { UI };