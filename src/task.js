let Task = {}

Task.tags = ['#Tag1', '#Tag2']
Task.spaces = {
    'Default' : {
        priotities: ['LOW', 'MEDIUM', 'HIGH'],
        states : ['TODO', 'DOING', 'DONE'],
    },
    'Other' : {
        priotities: ['LOW', 'MEDIUM', 'HIGH'],
        states : ['TODO', 'DOING', 'DONE'],
    },
};

Task.currentSpace = 'Default';

Task.boards = [];
Task.list = new Map();

let _idCounter = 0;

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