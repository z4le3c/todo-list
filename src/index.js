import './style.css'
import { Task } from './task'
import { UI } from './ui';

let Handler = {}

Handler.handleNewTaskInput = (newTask) => {
    let task = Task.newTask(
        newTask.description,
        newTask.date, 
        'notes', 
        '#t1 #t2',
        newTask.space,
        'LOW', 
        'TODO', 
    );
    Task.addTask(task);
    UI.createTaskList(Task.getTasks([
        e => e.space == Task.currentSpace
    ]));
    Task.save();

    console.log(Task.list)
}

Handler.handleDeletion = (task) => {
    Task.deleteTask(task);
    Task.save();

    console.log(Task.list);
}

Handler.updateTask = (task, newAttributes) => {
    for (const key in newAttributes) {
        task[key] = newAttributes[key];
    }

    Task.save();
}

Handler.getSpacesList = () => {
    return Task.getSpacesList()
}

Handler.getStates = () => {
    return Task.spaces[Task.currentSpace].states;
}

Handler.getPriorities = () => {
    return Task.spaces[Task.currentSpace].priorities;    
}

Handler.getCurrentSpace = () => {
    return Task.currentSpace;
}

Handler.getPriorityColor = (task) => {
    let colors = Task.spaces[task.space].colors;
    let colorI = Task.spaces[task.space].priorities.findIndex((e) => e == task.priority);
    return colors[colorI];
}

// changes the current space and shows that space list.
Handler.setCurrentSpace = (space) => {
    Task.currentSpace = space;
    UI.createTaskList(Task.getTasks([
        e => e.space == Task.currentSpace
    ]));
}

Task.addTask(Task.newTask(
    'This belongs in Default', 
    '', 
    'notes', 
    '#t1 #t2',
    'Default',
    'LOW', 
    'TODO', 
));

Task.addTask(Task.newTask(
    'This also belongs to Default',
    '2023-11-06',
    'notes',
    '#t1',
    'Default',
    'LOW',
    'DOING',
));

Task.addTask(Task.newTask(
    'This belongs in Other', 
    '', 
    'notes', 
    '#t1 #t2',
    'Other',
    'LOW', 
    'TODO', 
));

UI.setHandler(Handler);
UI.createBaseInterface();
Task.load();
UI.createTaskList(Task.getTasks([
    e => e.space == Task.currentSpace
]));

/**
 * DONE add ability to change spaces task list
 * DONE make the default space when creating a new task to be the current space.
 * DONE add date 
 * DONE add ability to expand a single todo to see/edit its details
 * DONE add ability to edit and save the date of an existing task
 * DONE add state property
 * DONE add ability to chage the description of an existing task
 * DONE fix the state positioning
 * DONE add ability to change the space of an existing task.
 * DONE add priority
 * DONE save data
 * TODO add priority and state selection when adding a task
 * TODO add ability to sort task
 * TODO add time
 * TODO add ability to make and delete spaces
 */