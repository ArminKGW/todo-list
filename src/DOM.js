import {projects, makeProject, editProject, removeProject, addTask, editTask, removeTask, changeDoneStatus} from "./appLogic.js";
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
                editProjectDialog.dataset.projectIndex = projectToEdit.dataset.column;
                editProjectDialog.showModal();
                break;
            case "remove-project":
                const editProject = target.previousElementSibling;
                const projectToRemove = editProject.previousElementSibling;
                removeProject(projectToRemove.dataset.column);
                break;
            case "add-task":
                const addTaskDialog = document.querySelector("#add-task-dialog");
                addTaskDialog.showModal();
                break;
            case "edit-task":
                openTaskDialog();
                break;
            case "remove-task":
                const taskBox = target.closest(".task-box");
                const title = document.querySelector("h1");
                removeTask(title.textContent, taskBox.dataset.taskIndex);
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
    const projectIndex = dialog.dataset.projectIndex;

    if(dialog.id === "edit-project-dialog"){
        if(Btn.classList.contains("confirm")){
            if(dialog.querySelector("form").checkValidity()){
                e.preventDefault();
                handleEditProject(projectIndex);
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
    console.log(projects);
}

function addProjectToDOM(project){
    const projectsContainer = document.querySelector(".projects");
    const index = projects.map(item => item.name).indexOf(project.name);
    const projectBox = createProjectElement(project, index);
    projectsContainer.appendChild(projectBox);
}

function handleEditProject(projectIndex){
    const projectName = document.querySelector("#edit-project-name");
    editProject(projectIndex, projectName.value);
}

function editProjectInDOM(index, name){
    const project = document.querySelector(`.project[data-column="${index}"]`);
    project.textContent = name;
}

function removeProjectInDOM(index){
    const project = document.querySelector(`.project[data-column="${index}"]`);
    const projectBox = project.closest(".project-box");
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
    taskName.textContent = task.name;
    const taskDueDate = document.createElement("div");
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


export {handleEvents, renderProjects, addProjectToDOM, editProjectInDOM, removeProjectInDOM, addTaskToDOM, removeTaskInDOM};