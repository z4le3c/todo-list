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
        'TODO', 
        'LOW', 
    );
    Task.addTask(task);
    UI.createTaskList(Task.getTasks([
        e => e.space == Task.currentSpace
    ]));
    console.log(Task.list)
}

Handler.handleDeletion = (task) => {
    Task.deleteTask(task);
    console.log(Task.list);
}

Handler.updateTask = (task, newAttributes) => {
    for (const key in newAttributes) {
        task[key] = newAttributes[key];
    }
}

Handler.getSpacesList = () => {
    return Task.getSpacesList()
}

Handler.getCurrentSpace = () => {
    return Task.currentSpace;
}

Handler.setCurrentSpace = (space) => {
    Task.currentSpace = space;
    UI.createTaskList(Task.getTasks([
        e => e.space == Task.currentSpace
    ]));
}

let t1 = Task.newTask(
    'This belongs in Default', 
    '', 
    'notes', 
    '#t1 #t2',
    'Default',
    'TODO', 
    'LOW', 
);

let t2 = Task.newTask(
    'This belongs in Other', 
    '', 
    'notes', 
    '#t1 #t2',
    'Other',
    'TODO', 
    'LOW', 
);

Task.addTask(t1);
Task.addTask(t2);


UI.setHandler(Handler);
UI.createBaseInterface();
UI.createTaskList(Task.getTasks([
    e => e.space == Task.currentSpace
]));

/**
 * DONE add ability to change spaces task list
 * DONE make the default space when creating a new task to be the current space.
 * DONE add date 
 * DONE add ability to expand a single todo to see/edit its details
 * DONE add ability to edit and save the date of an existing task
 * TODO add state property
 * TODO add ability to chage the description of an existing task
 * TODO add priority
 * TODO save data
 */