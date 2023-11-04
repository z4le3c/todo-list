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
        'Default',
        'TODO', 
        'LOW', 
    );
    UI.addTaskToList(task);
}

UI.build(Handler);

let t1 = Task.newTask(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 
    'date', 
    'notes', 
    '#t1 #t2',
    'Default',
    'TODO', 
    'LOW', 
);

UI.addTaskToList(t1)
UI.addTaskToList(t1)
UI.addTaskToList(t1)
UI.addTaskToList(t1)
UI.addTaskToList(t1)