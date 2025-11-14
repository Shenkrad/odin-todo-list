
// singleton storage
export const storage = (() => {

    const STORAGE_KEY = "data";
    
    function saveState(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function getState() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY))  || {};
    }

    function addTask(newTask) {
        const state = getState();
        if (!state[newTask.project]) throw new Error("Invalid project name");
        state[newTask.project].tasks.push(newTask.data);

        saveState(state);
        return newTask.data;
    }

    function addProject(name) {
       const state = getState();
       state[name] = {tasks:[]};

       saveState(state);
    }

    function removeProject(name) {
        const state = getState();
        
        if (!state.hasOwnProperty(name)) throw new Error("Project name not found");
        if (name === "default") throw new Error("Unable to delete default project");

        delete state[name];
        saveState(state);
    }

    function getProject(name) {
        const state = getState();

        if (!state.hasOwnProperty(name)) throw new Error("Project name not found");

        return state[name];
    }

    function checkIfProjectExists(name) {
        const state = getState();
        return state.hasOwnProperty(name);
    }

    return { getState, addTask, addProject, removeProject, checkIfProjectExists, getProject };

})();