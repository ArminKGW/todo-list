import {projects, makeProject, addTask, editTask, editProject, changeDoneStatus} from "./appLogic.js";
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
            case "add-project":
                const addDialog = document.querySelector("#add-project-dialog");
                addDialog.showModal();
                break;
            case "edit-project":
                const project = target.previousElementSibling;
                const editDialog = document.querySelector("#edit-project-dialog");
                console.log(project);
                editDialog.dataset.projectIndex = project.dataset.column;
                editDialog.showModal();
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
    console.log(projects);
}

// function editProjectInDOM(){

// }

function handleRemoveProject(){

}

function handleAddDialogs(e){
    const Btn = e.target;
    const dialog = Btn.closest("dialog");
    
    if(Btn.classList.contains("confirm")){
        if(dialog.querySelector("form").checkValidity()){
            e.preventDefault();
            if(dialog.id === "add-project-dialog"){
                handleAddProject();
            }
            // else if(dialog.id === "task-dialog"){
            //     const taskName = document.querySelector("#task-name");
            //     const taskDescription = document.querySelector("#task-description");
            //     const taskDate = document.querySelector("#task-date");
            //     const taskPriority = document.querySelector("dialog select");
            //     const taskNotes = document.querySelector(".task-notes");
            // }
            dialog.close()
        }
    }
    else{
        dialog.close();
    }
    resetForm(dialog);
}

function handleEditDialogs(e, dialog){
    const Btn = e.target;
    const projectIndex = dialog.dataset.projectIndex;

    if(Btn.classList.contains("confirm")){
        if(dialog.querySelector("form").checkValidity()){
            e.preventDefault();
            if(dialog.id === "edit-project-dialog"){
                handleEditProject(projectIndex);
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



export {handleEvents, renderProjects, addProjectToDOM, editProjectInDOM};