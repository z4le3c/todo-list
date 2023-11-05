let Task = {}

Task.tags = ['#Tag1', '#Tag2']
Task.spaces = {
    'Default' : {
        priotities: ['LOW', 'MEDIUM', 'HIGH'],
        states : ['TODO', 'DOING', 'DONE'],
    }
};

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

Task.getTasks = (filters) => {}

Task.sortTasks = (tasks, comparator, descending) => {}

export { Task }