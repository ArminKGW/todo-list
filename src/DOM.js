import {projects, makeProject, editProject, removeProject, addTask, editTask, removeTask, changeDoneStatus, findProjectIndexByName, findProjectNameByIndex} from "./appLogic.js";
import {trashcanIcon, editIcon} from "./index.js";

function renderProjects(){
    const projectsContainer = document.querySelector(".projects");
    projectsContainer.textContent = "";
    projects.forEach((project, index) => {
        const projectBox = createProjectElement(project, index);
        projectsContainer.appendChild(projectBox);
    });
}

function handleEvents(){
    document.addEventListener("click", (e) => {
        const target = e.target;
        switch(target.className){
            case "project":
                showProject(target);
                break;
            case "add-project":
                const addProjectDialog = document.querySelector("#add-project-dialog");
                addProjectDialog.showModal();
                break;
            case "edit-project":
                const projectToEdit = target.previousElementSibling;
                const editProjectDialog = document.querySelector("#edit-project-dialog");
                const inputProjectName = document.querySelector("#edit-project-name");
                inputProjectName.value = projectToEdit.textContent;
                editProjectDialog.dataset.projectDialogIndex = projectToEdit.dataset.column;
                editProjectDialog.showModal();
                break;
            case "remove-project":
                const editProject = target.previousElementSibling;
                const projectToRemove = editProject.previousElementSibling;
                removeProject(+projectToRemove.dataset.column);
                break;
            case "add-task":
                const addTaskDialog = document.querySelector("#add-task-dialog");
                addTaskDialog.showModal();
                break;
            case "edit-task":
                const editTaskDialog = document.querySelector("#edit-task-dialog");
                const box = target.closest(".task-box");
                const h1 = document.querySelector("h1");
                initializeTaskForm(h1.textContent, box.dataset.taskIndex);
                editTaskDialog.dataset.taskDialogIndex = box.dataset.taskIndex; 
                editTaskDialog.showModal();
                break;
            case "remove-task":
                const taskBox = target.closest(".task-box");
                const title = document.querySelector("h1");
                removeTask(title.textContent, +taskBox.dataset.taskIndex);
                break;
            case "cancel":
            case "confirm":
                const dialog = target.closest("dialog");
                if(dialog.id.startsWith("add")){
                    handleAddDialogs(e);
                }
                if(dialog.id.startsWith("edit")){
                    handleEditDialogs(e, dialog);
                }
        }
    });
    document.addEventListener("close", (e) => {
        document.activeElement.blur();
    });
}

function createProjectElement(project, index){
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");

    const element = document.createElement("div");
    element.classList.add("project");
    element.dataset.column = index;
    element.textContent = project.name;

    if(index === 0){
        const title = document.querySelector("h1");
        title.textContent = project.name;
    }

    projectBox.appendChild(element);
    addIconsToProject(projectBox);

    return projectBox;
}

function addIconsToProject(box){
    const editImg = new Image();
    editImg.classList.add("edit-project");
    editImg.src = editIcon;

    const trashcanImg = new Image();
    trashcanImg.classList.add("remove-project");
    trashcanImg.src = trashcanIcon;

    box.append(editImg, trashcanImg);
}

function handleAddDialogs(e){
    const Btn = e.target;
    const dialog = Btn.closest("dialog");
    

    if(dialog.id === "add-project-dialog"){
        if(Btn.classList.contains("confirm")){
            if(dialog.querySelector("form").checkValidity()){
                e.preventDefault();
                handleAddProject();
                dialog.close();
            }
        }
        else{
            dialog.close();
        }
    }
    else if(dialog.id === "add-task-dialog"){
        if(Btn.classList.contains("confirm")){
            if(dialog.querySelector("form").checkValidity()){
                e.preventDefault();
                handleAddTask();
                dialog.close();
            }
        }
        else{
            dialog.close();
        }
    }
    resetForm(dialog);
}

function handleEditDialogs(e, dialog){
    const Btn = e.target;
    const projectIndex = dialog.dataset.projectDialogIndex;
    const taskIndex = dialog.dataset.taskDialogIndex;

    if(dialog.id === "edit-project-dialog"){
        if(Btn.classList.contains("confirm")){
            if(dialog.querySelector("form").checkValidity()){
                e.preventDefault();
                handleEditProject(+projectIndex);
                dialog.close();
            }
        }
        else{
            dialog.close();
        }
    }
    else if(dialog.id === "edit-task-dialog"){
        if(Btn.classList.contains("confirm")){
            if(dialog.querySelector("form").checkValidity()){
                e.preventDefault();
                const title = document.querySelector("h1");
                const index = findProjectIndexByName(title.textContent);
                handleEditTask(index, +taskIndex);
                dialog.close();
            }
        }
        else{
            dialog.close();
        }
    }
}

function handleAddProject(){
    const projectName = document.querySelector("#add-project-name");
    makeProject(projectName.value);
}

function addProjectToDOM(project){
    const projectsContainer = document.querySelector(".projects");
    const index = projects.map(item => item.name).indexOf(project.name);
    if(index === 0){
        createAddTask();
    }
    const projectBox = createProjectElement(project, index);
    projectsContainer.appendChild(projectBox);
}

function handleEditProject(projectIndex){
    const projectName = document.querySelector("#edit-project-name");
    editProject(projectIndex, projectName.value);
}

function editProjectInDOM(index, name){
    const project = document.querySelector(`.project[data-column="${index}"]`);
    updateAfterEditProject(name);
    project.textContent = name;
}

function removeProjectInDOM(index){
    const project = document.querySelector(`.project[data-column="${index}"]`);
    const projectBox = project.closest(".project-box");
    updateAfterRemoveProject(index);
    projectBox.remove();
}

function showProject(project){
    const taskContainer = document.querySelector(".todos");
    taskContainer.textContent = "";
    const title = document.querySelector("h1");
    title.textContent = project.textContent;
    let tasks = projects[project.dataset.column].todoItems; 
    tasks.forEach((task, index) => {
        const taskBox = createTaskElement(task, index);
        taskContainer.appendChild(taskBox);
    });
}

function updateAfterEditProject(name){
    const title = document.querySelector("h1");
    title.textContent = name;
}

function updateAfterRemoveProject(index){
    const title = document.querySelector("h1");
    
    if(index === 0){
        title.textContent = "";
        const addTaskBtn = document.querySelector(".add-task");
        addTaskBtn.remove();
        return;
    }
    const name = findProjectNameByIndex(index - 1);
    title.textContent = name;
}

function createAddTask(){
    const container = document.querySelector(".todos");
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task");
    addTaskBtn.textContent = "+Add task";
    container.appendChild(addTaskBtn);
}

function handleAddTask(){
    const currentProject = document.querySelector("h1");
    const projectName = currentProject.textContent;
    const taskName = document.querySelector("#add-task-name");           
    const taskDescription = document.querySelector("#add-task-description");
    const taskDate = document.querySelector("#add-task-date");
    const taskPriority = document.querySelector("#add-task-priority");
    const taskNotes = document.querySelector(".add-task-notes");
    addTask(projectName, taskName.value, taskDescription.value, taskDate.value,taskPriority.value, taskNotes.value);
}

function addTaskToDOM(task, index){
    const taskContainer = document.querySelector(".todos");
    const taskBox = createTaskElement(task, index)
    taskContainer.appendChild(taskBox);
}

function handleEditTask(projectIndex, taskIndex){
    const projectName = findProjectNameByIndex(projectIndex);
    const name = document.querySelector("#edit-task-name");
    const description = document.querySelector("#edit-task-description");
    const date = document.querySelector("#edit-task-date");
    const notes = document.querySelector(".edit-task-notes");
    const priority = document.querySelector(".edit-task-priority");
    editTask(projectName, taskIndex, name.value, description.value, date.value, priority.value, notes.value);
}

function editTaskInDOM(taskIndex, task){
    console.log(projects);
    const taskBox = document.querySelector(`.task-box[data-task-index="${taskIndex}"]`);
    const name = taskBox.querySelector(".task-name");
    const date = taskBox.querySelector(".task-date");
    const priority = taskBox.querySelector(".priority");
    console.log(task.name);
    name.textContent = task.name;
    date.textContent = task.dueDate;
    priority.classList.replace(priority.classList[0], task.priority.toLowerCase());
}

function removeTaskInDOM(taskIndex){
    const taskBox = document.querySelector(`.task-box[data-task-index="${taskIndex}"`);
    taskBox.remove();
}

function createTaskElement(task, index){
    const taskBox = document.createElement("div");
    taskBox.classList.add("task-box");
    taskBox.dataset.taskIndex = index;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskPriority = document.createElement("div");
    taskPriority.classList.add(task.priority.toLowerCase(), "priority");
    const taskName = document.createElement("div");
    taskName.classList.add("task-name");
    taskName.textContent = task.name;
    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("task-date");
    taskDueDate.textContent = task.dueDate;
    taskBox.append(checkbox, taskPriority, taskName, taskDueDate);
    addIconsToTask(taskBox);
    return taskBox;
}

function addIconsToTask(box){
    const editImg = new Image();
    editImg.classList.add("edit-task");
    editImg.src = editIcon;

    const trashcanImg = new Image();
    trashcanImg.classList.add("remove-task");
    trashcanImg.src = trashcanIcon;

    box.append(editImg, trashcanImg);
}

function resetForm(parent){
    const inputs = parent.querySelectorAll("input, textarea");
    const dropdown = parent.querySelector("select");
    inputs.forEach(input => {
        input.value = "";
    });
    if(dropdown){
        dropdown.value = "medium";
    }
}

function initializeTaskForm(projectName, taskIndex){
    const projectIndex = findProjectIndexByName(projectName);
    const dialogName = document.querySelector("#edit-task-name");
    const dialogDescription = document.querySelector("#edit-task-description");
    const dialogDueDate = document.querySelector("#edit-task-date");
    const dialogNotes = document.querySelector(".edit-task-notes");
    const dialogPriority = document.querySelector(".edit-task-priority");
    const name = projects[projectIndex].todoItems[taskIndex].name;
    const description = projects[projectIndex].todoItems[taskIndex].description;
    const date = projects[projectIndex].todoItems[taskIndex].dueDate;
    const notes = projects[projectIndex].todoItems[taskIndex].notes;
    const priority = projects[projectIndex].todoItems[taskIndex].priority;
    dialogName.value = name;
    dialogDescription.value = description;
    dialogDueDate.value = date;
    dialogNotes.value = notes;
    dialogPriority.value = priority;
}


export {handleEvents, renderProjects, addProjectToDOM, editProjectInDOM, removeProjectInDOM, addTaskToDOM, removeTaskInDOM, editTaskInDOM};