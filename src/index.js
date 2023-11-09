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
        newTask.priority, 
        newTask.state, 
    );
    Task.addTask(task);
    UI.createTaskList(Task.getTasks([
        e => e.space == Task.currentSpace
    ]));
    Task.save();

    console.log(Task.list)
}

Handler.addNewSpace = (spaceName) => {
    Task.spaces[spaceName] = Task.makeDefaultSpaceElements();
    UI.updateSpaceHeader();
    Task.save()
}

Handler.handleDeletion = (task) => {
    Task.deleteTask(task);
    Task.save();

    console.log(Task.list);
}

Handler.deleteCurrentSpace = () => {
    let spaces = Task.getSpacesList();
    if (spaces.length == 1) return
    
    delete Task.spaces[Task.currentSpace];
    Task.deleteTasks([(e) => e.space == Task.currentSpace]);
    spaces = Task.getSpacesList();
    Task.currentSpace = spaces[0];

    Handler.setCurrentSpace(Task.currentSpace);
    UI.updateSpaceHeader();
    Task.save()
}

Handler.updateTask = (task, newAttributes) => {
    for (const key in newAttributes) {
        task[key] = newAttributes[key];
    }

    Task.save();
}

Handler.updateCurrentSpaceName = (newName) => {
    if (newName == Task.currentSpace) return ;

    Task.spaces[newName] = Task.spaces[Task.currentSpace]
    delete Task.spaces[Task.currentSpace]

    Task.currentSpace = newName;

    UI.updateSpaceHeader()
    Task.save();
    Task.saveCurrentSpace();
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
    Task.saveCurrentSpace();
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
    'HIGH',
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

Task.load();
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
 * DONE add state property
 * DONE add ability to chage the description of an existing task
 * DONE fix the state positioning
 * DONE add ability to change the space of an existing task.
 * DONE add priority
 * DONE save data
 * DONE add ability to make and delete spaces
 * DONE add priority and state selection when adding a task
 * DONE edit a space name
 * DONE add notes
 * TODO add ability to sort task
 * TODO create new task by pressing enter
 * TODO close notes with the 'escape' key
 * TODO clean up buildTask & buildNewTaskInterface
 * TODO add time
 * TODO add tags
 * TODO add filters
 * TODO add manual sorting and save it on 'boards'
 * TODO add subtask
 */