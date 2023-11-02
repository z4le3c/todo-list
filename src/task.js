let Task = {}

Task.priotities = ['!0', '!1', '!2', '!3']
Task.states;
Task.spaces;
Task.tags;

let idCounter = 0

/**
 * 
 * @param {string} description 
 * @param {date} date 
 * @param {string} priority 
 * @param {string} notes 
 * @param {string} state 
 * @param {string} space 
 * @param {string} tags 
 */
Task.newTask = (description, date, priority, notes, state, space, tags) => {
    let obj = {};
    obj.description = description;
    obj.date = date;
    obj.priority = priority;
    obj.notes = notes;
    obj.state = state;
    obj.space = space;
    obj.tags = [''];
    obj.id = idCounter++;

    /**
     * 
     * @param {string} tags 
     */
    obj.setTags = (tags) => {
        obj.tags = tags.split(' ');
    }

    obj.setTags(tags);

    return obj;
}

export { Task }