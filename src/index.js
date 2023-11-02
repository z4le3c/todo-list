import './style.css'
import { Task } from './task'
import { UI } from './ui';

let t1 = Task.newTask('Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
 '%date', '!0', '"notes"', '-TODO', '$Main', '#task #later');
let t2 = Task.newTask('description', '', '', '', '', '', '#task #later');
let t3 = Task.newTask('description', '%date', '!0', '"notes"', '-TODO', '$Main', '#task');
console.log(t1)
console.log(t2)
console.log(t3)

UI.addTask(t1)
UI.addTask(t1)
UI.addTask(t1)
UI.addTask(t1)
UI.addTask(t1)
UI.addTask(t1)
UI.addTask(t1)