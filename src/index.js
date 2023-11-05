import './style.css'
import { Task } from './task'
import { UI } from './ui';

let Handler = {}

Handler.handleNewTaskInput = (newTask) => {
    let task = Task.newTask(
        newTask.description,
        'date', 
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

Handler.getSpacesList = () => {
    return Task.getSpacesList()
}

let t1 = Task.newTask(
    'This belongs in Default', 
    'date', 
    'notes', 
    '#t1 #t2',
    'Default',
    'TODO', 
    'LOW', 
);

let t2 = Task.newTask(
    'This belongs in Other', 
    'date', 
    'notes', 
    '#t1 #t2',
    'Other',
    'TODO', 
    'LOW', 
);

Task.addTask(t1);
Task.addTask(t2);


UI.setHandler(Handler);
UI.createBaseInterface(Task.currentSpace);
UI.createTaskList(Task.getTasks([
    e => e.space == Task.currentSpace
]));

/**
 * TODO add ability to change spaces task list
 * TODO make the default space when creating a new task to be the current space.
 * TODO add date functionality
 * TODO add priority functionality
 * TODO add ability to expand a single todo to see/edit its details
 */