const projects = [
    {name: "Default Project", todoItems: []}
];

function makeProject(name){
    let project = {
        name,
        todoItems: []
    };
    projects.push(project);
}

function addTask(projectName, taskName, description, dueDate, priority, notes){
    const project = findProject(projectName);
    if(project){
        let task = {
            name: taskName,
            description,
            dueDate,
            priority,
            notes,
            isDone: false
        };
        project.todoItems.push(task);
        return;
    }
    else{
        console.log("project not found in addTask");
    }
}

function editTask(projectName, taskIndex, name, description, dueDate, priority, notes){
    const project = findProject(projectName);
    if(project){
        const task = project.todoItems[taskIndex];
        task.name = name;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
        task.notes = notes;
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

function removeProject(index){
    projects.splice(index, 1);
}

function editProject(index, projectName){
    projects[index].name = projectName;
}

function removeTask(projectIndex, taskIndex){
    projects[projectIndex].todoItems.splice(taskIndex, 1);
}

export {projects, makeProject, addTask, editTask, changeDoneStatus, removeProject, editProject, removeTask};

