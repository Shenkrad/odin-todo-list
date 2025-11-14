import { storage } from "./storage";
import { pubsub } from "./pubsub";

// singleton controller
export const controller = (() =>  {

    const DEFAULT_PROJECT = 'default';
    let activeProject = DEFAULT_PROJECT;

    function init(){
        if (Object.keys(storage.getState()).length === 0) setFreshStartData();
        pubsub.emit("app:ready", {default_project: DEFAULT_PROJECT, data: storage.getState() });
    }

    function setFreshStartData(){
        storage.addProject(DEFAULT_PROJECT);
    }

    function addProject(projectName){
        if (storage.checkIfProjectExists(projectName)) throw new Error("Project already exists");
        storage.addProject(projectName);
        pubsub.emit("project:added", projectName);
    }

    function removeProject(projectName){
        storage.removeProject(projectName);
        pubsub.emit("project:removed", projectName);
    }

    function changeActiveProject(projectName) {
        activeProject = projectName;
        pubsub.emit("project:active-changed", { name:projectName, data: storage.getProject(projectName) });
    }

    function addTask(task) {
        if(!task.title) throw new Error("Title is required");

        const addedTask = storage.addTask({project: activeProject, data: {id: crypto.randomUUID(), title: task.title, description: task.description, dueDate: task.dueDate, priority: task.priority, notes: task.notes} });
        pubsub.emit("task:added", addedTask);
    }

    return { init, removeProject, addProject, changeActiveProject, addTask};
})();
