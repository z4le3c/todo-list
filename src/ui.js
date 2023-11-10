const UI = {}

const appContainer = document.querySelector('#app')
let newTaskActive = false

let _handler

UI.setHandler = (handler) => {
  _handler = handler
}

UI.updateSpaceHeader = () => {
  const oldSpaceSelect = document.querySelector('.space-header-select')
  const newSpaceSelect = buildSelect(
    _handler.getCurrentSpace(),
    _handler.getSpacesList(),
    'space-header-select'
  )

  newSpaceSelect.addEventListener('input', () => {
    _handler.setCurrentSpace(newSpaceSelect.value)
  })

  oldSpaceSelect.replaceWith(newSpaceSelect)
}

UI.createBaseInterface = () => {
  const spaceContainer = buildElement('div', '', 'space-container')
  const spaceSelect = buildSelect(
    _handler.getCurrentSpace(),
    _handler.getSpacesList(),
    'space-header-select'
  )
  const buttonsContainer = buildElement('div', '', 'space-buttons-container')
  const addSpaceButton = buildElement('button', '+', 'space-option-button')
  const deleteSpaceButton = buildElement('button', '-', 'space-option-button')
  const editSpaceButton = buildElement('button', 'e', 'space-option-button')
  const addItemButton = buildElement('button', '+', 'add-item-button')

  buttonsContainer.appendChild(addSpaceButton)
  buttonsContainer.appendChild(deleteSpaceButton)
  buttonsContainer.appendChild(editSpaceButton)

  spaceSelect.addEventListener('input', () => {
    _handler.setCurrentSpace(spaceSelect.value)
  })

  addSpaceButton.addEventListener('click', () => {
    const spaceInputContainer = buildElement('div', '', 'space-input-container')
    const textInput = buildElement('input', '', 'space-input')
    const newSpaceButton = buildElement('button', 'new space', 'new-space-button')
    const cancelSpaceButton = buildElement('button', 'cancel', 'new-space-button')

    textInput.setAttribute('type', 'text')
    textInput.setAttribute('placeholder', 'space name')
    const restorePrevState = () => {
      spaceInputContainer.remove()

      spaceContainer.appendChild(buttonsContainer)
    }
    newSpaceButton.addEventListener('click', () => {
      if (textInput.value === '') return

      _handler.addNewSpace(textInput.value)

      restorePrevState()
    })

    cancelSpaceButton.addEventListener('click', () => {
      restorePrevState()
    })

    buttonsContainer.remove()

    spaceInputContainer.appendChild(textInput)
    spaceInputContainer.appendChild(newSpaceButton)
    spaceInputContainer.appendChild(cancelSpaceButton)
    spaceContainer.appendChild(spaceInputContainer)
  })

  deleteSpaceButton.addEventListener('click', () => {
    const spaceWarningContainer = buildElement('div', '', 'space-warning-container')
    const warningText = buildElement('div', 'Delete current space?', 'delete-space-warning')
    const confirmButton = buildElement('button', 'Yes', 'deletion-button')
    const cancelButton = buildElement('button', 'Cancel', 'deletion-button')

    const restorePrevState = () => {
      spaceWarningContainer.remove()

      spaceContainer.appendChild(buttonsContainer)
    }

    confirmButton.addEventListener('click', () => {
      _handler.deleteCurrentSpace()

      restorePrevState()
    })

    cancelButton.addEventListener('click', () => {
      restorePrevState()
    })

    buttonsContainer.remove()

    spaceWarningContainer.appendChild(warningText)
    spaceWarningContainer.appendChild(confirmButton)
    spaceWarningContainer.appendChild(cancelButton)
    spaceContainer.appendChild(spaceWarningContainer)
  })

  editSpaceButton.addEventListener('click', () => {
    const spaceEditContainer = buildElement('div', '', 'space-edit-container')
    const textInput = buildElement('input', '', 'space-edit-input')
    const confirmButton = buildElement('button', 'change name', 'edit-space-button')
    const cancelButton = buildElement('button', 'cancel', 'edit-space-button')

    textInput.setAttribute('type', 'text')
    textInput.setAttribute('value', _handler.getCurrentSpace())

    const restorePrevState = () => {
      spaceEditContainer.remove()

      spaceContainer.appendChild(buttonsContainer)
    }

    confirmButton.addEventListener('click', () => {
      _handler.updateCurrentSpaceName(textInput.value)

      restorePrevState()
    })

    cancelButton.addEventListener('click', () => {
      restorePrevState()
    })

    buttonsContainer.remove()

    spaceEditContainer.appendChild(textInput)
    spaceEditContainer.appendChild(confirmButton)
    spaceEditContainer.appendChild(cancelButton)

    spaceContainer.appendChild(spaceEditContainer)
  })

  addItemButton.addEventListener('click', () => {
    if (newTaskActive) return
    appContainer.appendChild(buildNewTaskInterface())
    newTaskActive = true
  })
  // here should be added the rest of the items stored
  spaceContainer.appendChild(spaceSelect)
  spaceContainer.appendChild(buttonsContainer)
  appContainer.appendChild(spaceContainer)
  appContainer.appendChild(addItemButton)
}

UI.createTaskList = (taskList) => {
  const oldTask = document.querySelectorAll('.task-container')

  for (const taskElement of oldTask) {
    taskElement.remove()
  }

  for (const task of taskList) {
    appContainer.appendChild(buildTask(task))
  }
}

const buildNewTaskInterface = () => {
  const newTaskContainer = buildElement('div', '', 'new-task-container')
  const descriptionInput = buildElement('input', '', 'task-description', 'description-input')
  const spaceSelect = buildSelect(
    _handler.getCurrentSpace(),
    _handler.getSpacesList(),
    'new-task-space-select'
  )
  const addButton = buildElement('button', 'add', 'new-task-button')
  const cancelButton = buildElement('button', 'cancel', 'new-task-button')
  const dateInput = buildElement('input', '', 'date-input')
  const posibleStates = _handler.getStates()
  const posiblePriorities = _handler.getPriorities()
  const prioritySelect = buildSelect(posiblePriorities[0], posiblePriorities, 'new-task-priority')
  const stateSelect = buildSelect(posibleStates[0], posibleStates, 'new-task-state')

  descriptionInput.setAttribute('type', 'text')
  descriptionInput.setAttribute('placeholder', 'description')

  dateInput.setAttribute('type', 'date')

  addButton.addEventListener('click', () => {
    if (spaceSelect.value === '') return

    _handler.handleNewTaskInput({
      description: descriptionInput.value,
      space: spaceSelect.value,
      date: dateInput.value,
      priority: prioritySelect.value,
      state: stateSelect.value
    })

    newTaskContainer.remove()
    newTaskActive = false
  })

  cancelButton.addEventListener('click', () => {
    newTaskContainer.remove()
    newTaskActive = false
  })

  newTaskContainer.appendChild(descriptionInput)
  newTaskContainer.appendChild(spaceSelect)
  newTaskContainer.appendChild(addButton)
  newTaskContainer.appendChild(cancelButton)
  newTaskContainer.appendChild(dateInput)
  newTaskContainer.appendChild(prioritySelect)
  newTaskContainer.appendChild(stateSelect)
  return newTaskContainer
}

const buildSelect = (defaultOption, itemList, ...cssClasses) => {
  const select = buildElement('select', '', ...cssClasses)

  let option = document.createElement('option')
  option.setAttribute('value', defaultOption)
  option.textContent = defaultOption
  select.appendChild(option)

  for (const item of itemList) {
    if (item === defaultOption) continue

    option = document.createElement('option')
    option.setAttribute('value', item)
    option.textContent = item
    select.appendChild(option)
  }

  return select
}

const buildTask = (task) => {
  const taskContainer = buildElement('div', '', 'task-container')
  const taskDescription = buildElement('input', '', 'task-description', 'description-input')
  const taskDetails = buildElement('button', 'Details', 'task-details')
  const taskDeleteButton = buildElement('button', 'Delete', 'task-delete')
  const taskState = buildSelect(task.state, _handler.getStates(), 'task-state')
  const taskDate = buildElement('input', '', 'date-input')
  const taskSpace = buildSelect(task.space, _handler.getSpacesList(), 'task-space')
  const taskPriority = buildSelect(task.priority, _handler.getPriorities(), 'task-priority')
  const taskNotes = buildElement('button', 'notes', 'task-notes')
  const taskNotesTextarea = buildElement('textarea', task.notes, 'task-notes-textarea')

  taskContainer.style.border = `1px solid ${_handler.getPriorityColor(task)}`

  taskDescription.setAttribute('type', 'text')
  taskDescription.setAttribute('value', task.description)
  taskDescription.setAttribute('placeholder', 'task description')
  taskDescription.addEventListener('input', () => {
    _handler.updateTask(task, { description: taskDescription.value })
  })

  taskState.addEventListener('input', () => {
    _handler.updateTask(task, { state: taskState.value })
  })

  taskDate.setAttribute('type', 'date')
  taskDate.setAttribute('value', task.date)
  taskDate.addEventListener('input', () => {
    _handler.updateTask(task, { date: taskDate.value })
  })

  taskSpace.addEventListener('input', () => {
    _handler.updateTask(task, { space: taskSpace.value })
    _handler.setCurrentSpace(_handler.getCurrentSpace())
  })

  taskPriority.addEventListener('input', () => {
    _handler.updateTask(task, { priority: taskPriority.value })
  })

  const cleanOffNotes = () => {
    taskNotes.textContent = 'notes'
    taskNotesTextarea.remove()
    taskContainer.classList.remove('task-container-with-notes')
  }

  taskNotes.addEventListener('click', () => {
    if (taskNotes.textContent === 'notes') {
      taskNotes.textContent = 'close notes'
      taskNotesTextarea.value = task.notes

      taskNotesTextarea.addEventListener('input', () => {
        _handler.updateTask(task, { notes: taskNotesTextarea.value })
      })

      taskContainer.appendChild(taskNotesTextarea)
      taskContainer.classList.add('task-container-with-notes')
    } else if (taskNotes.textContent === 'close notes') {
      cleanOffNotes()
    }
  })

  taskDetails.addEventListener('click', () => {
    if (taskDetails.textContent === 'Details') {
      taskDetails.textContent = 'Less'

      taskDeleteButton.remove()
      taskState.remove()

      taskContainer.appendChild(taskDate)
      taskContainer.appendChild(taskSpace)
      taskContainer.appendChild(taskPriority)
      taskContainer.appendChild(taskNotes)
      taskContainer.appendChild(taskState)
    } else if (taskDetails.textContent === 'Less') {
      taskDetails.textContent = 'Details'

      taskDate.remove()
      taskSpace.remove()
      taskPriority.remove()
      taskState.remove()
      taskNotes.remove()

      cleanOffNotes()

      taskContainer.appendChild(taskDeleteButton)
      taskContainer.appendChild(taskState)
    }
  })

  taskDeleteButton.addEventListener('click', () => {
    _handler.handleDeletion(task)
    taskContainer.remove()
  })

  taskContainer.appendChild(taskDescription)
  taskContainer.appendChild(taskDetails)
  taskContainer.appendChild(taskDeleteButton)
  taskContainer.appendChild(taskState)

  return taskContainer
}

const buildElement = (type, text, ...classes) => {
  const element = document.createElement(type)

  for (const cssClass of classes) {
    element.classList.add(cssClass)
  }

  element.textContent = text

  return element
}

export { UI }
