let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

let _handler;

UI.setHandler = (handler) => {
    _handler = handler;
}

UI.updateSpaceHeader = () => {
    let oldSpaceSelect = document.querySelector('.space-header-select')
    let newSpaceSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'space-header-select',
    );

    newSpaceSelect.addEventListener('input', () => { 
        _handler.setCurrentSpace(newSpaceSelect.value);
    })

    oldSpaceSelect.replaceWith(newSpaceSelect);
}

UI.createBaseInterface = () => {
    let spaceContainer = buildElement('div', '', 'space-container')
    let spaceSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'space-header-select',
    );
    let addSpaceButton = buildElement('button', '+', 'space-option-button')
    let deleteSpaceButton = buildElement('button', '-', 'space-option-button')
    let addItemButton = buildElement('button', '+', 'add-item-button');

    spaceSelect.addEventListener('input', () => { 
        _handler.setCurrentSpace(spaceSelect.value);
    })

    addSpaceButton.addEventListener('click', () => {
        let spaceInputContainer = buildElement('div', '', 'space-input-container');
        let textInput = buildElement('input', '', 'space-input');
        let newSpaceButton = buildElement('button', 'new space', 'new-space-button');
        let cancelSpaceButton = buildElement('button', 'cancel', 'new-space-button');

        textInput.setAttribute('type', 'text');
        textInput.setAttribute('placeholder', 'space name')
        let cleanSpaceOptions = () => {
            spaceInputContainer.remove()

            spaceContainer.appendChild(addSpaceButton)
            spaceContainer.appendChild(deleteSpaceButton)
        }
        newSpaceButton.addEventListener('click', () => {
            if (textInput.value == '') return 

            _handler.addNewSpace(textInput.value);

            cleanSpaceOptions()
        });

        cancelSpaceButton.addEventListener('click', () => {
            cleanSpaceOptions()
        });

        addSpaceButton.remove();
        deleteSpaceButton.remove();

        spaceInputContainer.appendChild(textInput);
        spaceInputContainer.appendChild(newSpaceButton);
        spaceInputContainer.appendChild(cancelSpaceButton);
        spaceContainer.appendChild(spaceInputContainer);
    })

    deleteSpaceButton.addEventListener('click', () => {
        let spaceWarningContainer = buildElement('div', '', 'space-warning-container');
        let warningText = buildElement('div', 'Do you want to delete the current space?', 'delete-space-warning');
        let confirmButton = buildElement('button', 'Yes', 'deletion-button')
        let cancelButton = buildElement('button', 'Cancel', 'deletion-button')

        confirmButton.addEventListener('click', () => {
            _handler.deleteCurrentSpace()
            
            spaceWarningContainer.remove();

            spaceContainer.appendChild(addSpaceButton);
            spaceContainer.appendChild(deleteSpaceButton);
        })

        cancelButton.addEventListener('click', () => {
            spaceWarningContainer.remove();

            spaceContainer.appendChild(addSpaceButton);
            spaceContainer.appendChild(deleteSpaceButton);
        })

        addSpaceButton.remove();
        deleteSpaceButton.remove();

        spaceWarningContainer.appendChild(warningText);
        spaceWarningContainer.appendChild(confirmButton);
        spaceWarningContainer.appendChild(cancelButton);
        spaceContainer.appendChild(spaceWarningContainer);
    })

    addItemButton.addEventListener('click', () => {
        if (newTaskActive) return;
        appContainer.appendChild(buildNewTaskInterface())
        newTaskActive = true;
    });
    // here should be added the rest of the items stored
    spaceContainer.appendChild(spaceSelect);
    spaceContainer.appendChild(addSpaceButton);
    spaceContainer.appendChild(deleteSpaceButton);
    appContainer.appendChild(spaceContainer);
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
    let taskSpace = buildSelect(task.space, _handler.getSpacesList(), 'task-space');
    let taskPriority = buildSelect(task.priority, _handler.getPriorities(), 'task-priority');

    taskContainer.style.border = `1px solid ${_handler.getPriorityColor(task)}`;

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

    taskSpace.addEventListener('input', () => {
        _handler.updateTask(task, {space:taskSpace.value})
        _handler.setCurrentSpace(_handler.getCurrentSpace())
    })

    taskPriority.addEventListener('input', () => {
        _handler.updateTask(task, {priority:taskPriority.value})
        setPriorityColor(task, taskContainer);
    })

    taskDetails.addEventListener('click', () => {
        if (taskDetails.textContent == 'Details') {
            taskDetails.textContent = 'Less';
            
            taskDeleteButton.remove();
            taskState.remove();

            taskContainer.appendChild(taskDate)
            taskContainer.appendChild(taskSpace)
            taskContainer.appendChild(taskPriority)
            taskContainer.appendChild(taskState)

        } else if(taskDetails.textContent == 'Less') {
            taskDetails.textContent = 'Details';

            taskDate.remove();
            taskSpace.remove();
            taskPriority.remove();
            taskState.remove();

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