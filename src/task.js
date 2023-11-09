let Task = {}

Task.tags = ['#Tag1', '#Tag2']
Task.spaces = {
    'Default' : {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    },
    'Other' : {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    },
    'Another' : {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    },
};

Task.currentSpace = 'Default';

Task.boards = [];
Task.list = new Map();

let _idCounter = 0;

Task.save = () => {
    let SaveObject = {
        list:Array.from(Task.list),
        _idCounter,
        spaces:Task.spaces,
    }
    window.localStorage.setItem('data', JSON.stringify(SaveObject));
}

Task.saveCurrentSpace = () => {
    window.localStorage.setItem('currentSpace', Task.currentSpace);
}

Task.load = () => {
    let data = window.localStorage.getItem('data');
    if (data) {
        data = JSON.parse(data);
        Task.list = new Map(data.list);
        _idCounter = data._idCounter;
        Task.spaces = data.spaces;
    }
    let currentSpace = window.localStorage.getItem('currentSpace')
    if (currentSpace) {
        Task.currentSpace = currentSpace
    }
}

Task.makeDefaultSpaceElements = () => {
    return {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    }
}

/**
 * 
 * @param {string} description 
 * @param {date} date 
 * @param {string} priority 
 * @param {string} notes 
 * @param {string} state 
 * @param {string} space 
 */
Task.newTask = (description, date, notes, tags, space, priority, state) => {
    let obj = {};
    obj.description = description;
    obj.date = date;
    obj.priority = priority;
    obj.notes = notes;
    obj.state = state;
    obj.space = space;
    obj.tags = tags;
    obj.subtask = []
    obj.id = _idCounter++;

    return obj;
}

Task.addTask = (task) => {
    Task.list.set(task.id, task);
}

Task.deleteTask = (task) => {
    Task.list.delete(task.id);
}

Task.deleteTasks = (filters) => {
    let taskToDelete = Task.getTasks(filters);

    for (const task of taskToDelete) {
        Task.list.delete(task.id);
    }
}

Task.getTasks = (filters) => {
    let list = [];

    for (const task of Task.list.values()) {
        list.push(task)
        for (const filter of filters) {
            if (!filter(task)) {
                list.pop()
                break;
            }
        }
    }

    return list;
}

Task.sortTasks = (tasks, comparator, descending) => {}

Task.getSpacesList = () => {
    let list = [];

    for (const space in Task.spaces) {
        list.push(space);
    }

    return list;
}

export { Task }