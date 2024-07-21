const projects = [
    {name: "Default Project", todoItems: []}
];

const makeProject = (name) => ({
    name,
    todoItems: []
});

const makeTodoItem = (name, description, dueDate, priority, notes) => ({
    name,
    description,
    dueDate,
    priority,
    notes,
    isDone: false
});

function addTask(projectName, taskName, description, dueDate, priority, notes){
    const project = findProject(projectName);
    if(project){
        project.todoItems.push(makeTodoItem(taskName, description, dueDate, priority, notes));
        return;
    }
    else{
        console.log("project not found in addTask");
    }
}

function editTask(projectName, taskName, description, dueDate, priority, notes){
    const project = findProject(projectName);
    if(project){
        const task = findTask(project, taskName);
        if(task){
            task.name = taskName;
            task.description = description;
            task.dueDate = dueDate;
            task.priority = priority;
            task.notes = notes;
        }
        else{
            console.log("task not found in editTask");
        }
    }
    else{
        console.log("project not found in editTask");
    }
}

function findProject(projectName){
    return projects.find(project => project.name === projectName);
}

function findTask(project, taskName){
    return project.todoItems.find(task => taskName === task.name);
}

function changeDoneStatus(projectName, taskName){
    const project = findProject(projectName);
    if(project){
        const task = findTask(project, taskName);
        if(task){
            task.isDone = !task.isDone;
        }
        else{
            console.log("task not found in editTask");
        }
    }
    else{
        console.log("project not found in editTask");
    }
}

export {projects, makeProject, makeTodoItem, addTask, editTask, changeDoneStatus}

