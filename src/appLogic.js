import {
  addProjectToDOM,
  editProjectInDOM,
  removeProjectInDOM,
  addTaskToDOM,
  removeTaskInDOM,
  editTaskInDOM,
} from './DOM.js';

const projects = [{ name: "Your Project's Name", todoItems: [] }];

function findProject(projectName) {
  return projects.find((project) => project.name === projectName);
}

function makeProject(name) {
  if (projects.map((project) => project.name).includes(name)) {
    return;
  }
  let project = {
    name,
    todoItems: [],
  };
  projects.push(project);
  addProjectToDOM(project);
}

function editProject(index, projectName) {
  projects[index].name = projectName;
  editProjectInDOM(index, projectName);
}

function removeProject(index) {
  projects.splice(index, 1);
  removeProjectInDOM(index);
}

function addTask(projectName, taskName, description, dueDate, priority, notes) {
  const project = findProject(projectName);
  if (project) {
    let task = {
      name: taskName,
      description,
      dueDate,
      priority,
      notes,
      isDone: false,
    };
    project.todoItems.push(task);
    addTaskToDOM(task, project.todoItems.indexOf(task));
  }
}

function editTask(
  projectName,
  taskIndex,
  name,
  description,
  dueDate,
  priority,
  notes,
) {
  const project = findProject(projectName);
  if (project) {
    const task = project.todoItems[taskIndex];
    task.name = name;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.notes = notes;
    editTaskInDOM(taskIndex, task);
  }
}

function findTask(project, taskName) {
  return project.todoItems.find((task) => taskName === task.name);
}

function changeDoneStatus(projectName, taskName) {
  const project = findProject(projectName);
  if (project) {
    const task = findTask(project, taskName);
    if (task) {
      task.isDone = !task.isDone;
    }
  }
}

function findProjectIndexByName(projectName) {
  const projectIndex = projects.findIndex(
    (project) => project.name === projectName,
  );
  if (projectIndex !== -1) {
    return projectIndex;
  }
}

function removeTask(projectName, taskIndex) {
  const projectIndex = findProjectIndexByName(projectName);
  if (projectIndex !== -1) {
    projects[projectIndex].todoItems.splice(taskIndex, 1);
  }
  removeTaskInDOM(taskIndex);
}

function findProjectNameByIndex(projectIndex) {
  if (projectIndex === -1) {
    return '';
  }
  const projectName = projects[projectIndex].name;
  if (projectName) {
    return projectName;
  }
}

export {
  projects,
  makeProject,
  addTask,
  editTask,
  changeDoneStatus,
  removeProject,
  editProject,
  removeTask,
  findProjectIndexByName,
  findProjectNameByIndex,
};
