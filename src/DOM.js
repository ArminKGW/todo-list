import {projects, makeProject, addTask, editTask, editProject, changeDoneStatus} from "./appLogic.js";
import {trashcanIcon, editIcon} from "./index.js";

function renderProjects(){
    const projectsContainer = document.querySelector(".projects");
    for(let project of projects){
        const projectBox = document.createElement("div");
        const element = document.createElement("div");
        element.textContent = project.name;
        projectBox.appendChild(element);
        addIconsToProject(projectBox);
        projectsContainer.appendChild(projectBox);
    }
}

function handleEvents(){
    document.addEventListener("click", (e) => {
        switch(e.target.className){
            case "add-project":
                openProjectDialog("add");
                break;
            case "edit-project":
                openProjectDialog("edit");
                break;
            case "remove-project":
                handleRemoveProject();
                break;
            case "add-task":
                handleAddTask();
                break;
            case "edit-task":
                openTaskDialog();
                break;
            case "cancel":
            case "confirm":
                handleDialogButtons(e);
        }
    });
    document.addEventListener("close", (e) => {
        document.activeElement.blur();
    });
}

function addProject(projectName){
    const projectsContainer = document.querySelector(".projects");
    const projectBox = document.createElement("div");
    const element = document.createElement("div");
    element.textContent = projectName;
    projectBox.appendChild(element);
    addIconsToProject(projectBox);
    projectsContainer.appendChild(projectBox);
}

function addIconsToProject(box){
    const editImg = new Image();
    editImg.classList.add("edit-project");
    editImg.src = editIcon;

    const trashcanImg = new Image();
    editImg.classList.add("remove-project");
    trashcanImg.src = trashcanIcon;

    box.append(editImg, trashcanImg);
}

function openProjectDialog(mode){
    if(mode === "add"){
        const addDialog = document.querySelector("#add-project-dialog");
        addDialog.showModal();
    }
    
    if(mode === "edit"){
        const editDialog = document.querySelector("#edit-project-dialog");
        editDialog.showModal();
    }  
}

function handleAddProject(){
    const projectName = document.querySelector("#add-project-name");
    makeProject(projectName.value);
    console.log(projects);
}

function handleEditProject(){
    editProject();
}

function handleRemoveProject(){

}

function handleDialogButtons(e){
    const Btn = e.target;
    const dialog = Btn.closest("dialog");
    
    if(Btn.classList.contains("confirm")){
        if(dialog.querySelector("form").checkValidity()){
            e.preventDefault();
            if(dialog.id === "add-project-dialog"){
                handleAddProject();
            }
            if(dialog.id === "edit-project-dialog"){
                handleEditProject();
            }
            else if(dialog.id === "task-dialog"){
                const taskName = document.querySelector("#task-name");
                const taskDescription = document.querySelector("#task-description");
                const taskDate = document.querySelector("#task-date");
                const taskPriority = document.querySelector("dialog select");
                const taskNotes = document.querySelector(".task-notes");
            }
            dialog.close()
        }
    }
    else{
        dialog.close();
    }
    resetForm(dialog);
}

function resetForm(parent){
    const inputs = parent.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });
}

function openTaskDialog(){
    const taskDialog = document.querySelector("#task-dialog");
    taskDialog.showModal();

}



export {handleEvents, renderProjects, addProject};