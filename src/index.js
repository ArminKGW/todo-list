import {projects, makeProject, addTask, editTask, changeDoneStatus} from "./appLogic.js";

projects.push(makeProject("today"));
addTask("today", "shop", "has to do shopping", "17/10", "High", "", false);
editTask("today", "shop", "has to do shopping", "7/10", "low", "");
changeDoneStatus("today", "shop");
console.log(projects);