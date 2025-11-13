import { storage } from "./storage";
import { pubsub } from "./pubsub";

// singleton controller
export const controller = (() =>  {

    function init(){
        if (Object.keys(storage.getState()).length === 0) setFreshStartData();
        // storage.addTask("default", new Task('New task', 'This is a test tasks', new Date("17 December, 2025 00:00:00"), "normal", "Finish it ASAP!", false));
        pubsub.emit("app:ready", storage.getState());
    }

    function setFreshStartData(){
        storage.addProject('default');
    }

    function addProject(projectName){
        storage.addProject(projectName);
        pubsub.emit("project:added", { projectName });
    }

    function removeProject(projectName){
        storage.removeProject(projectName);
        pubsub.emit("project:removed", { projectName });
    }

    return { init, removeProject, addProject };
})();
