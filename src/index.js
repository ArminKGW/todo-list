import "./styles.css";
import {projects, makeProject, addTask, editTask, changeDoneStatus, removeProject, editProject, removeTask} from "./appLogic.js";
import {handleEvents, renderProjects} from "./DOM.js";
import trashcanIcon from "./img/trashcan.svg";
import editIcon from "./img/edit.svg";

if(module.hot){
    module.hot.accept("./styles.css", function(){
        console.log("Applying updated css.");
    });
}

renderProjects();
handleEvents();

export {trashcanIcon, editIcon};
