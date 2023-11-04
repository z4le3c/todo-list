let Task = {}

Task.tags = ['#Tag1', '#Tag2']
Task.spaces = {
    'Default' : {
        priotities: ['LOW', 'MEDIUM', 'HIGH'],
        states : ['TODO', 'DOING', 'DONE'],
    }
};

Task.boards = [];
Task.list = [];

let idCounter = 0

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
    obj.id = idCounter++;

    return obj;
}

Task.getTasks = (filters) => {}

Task.removeTask = (task) => {}

Task.sortTasks = (tasks, comparator, descending) => {}

export { Task }