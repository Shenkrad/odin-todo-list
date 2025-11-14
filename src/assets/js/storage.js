
// singleton storage
export const storage = (() => {

    const STORAGE_KEY = "data";
    
    function saveState(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function getState() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY))  || {};
    }

    function addTask(pid, newTask) {
        const state = getState();
        if (!state[pid]) throw new Error("Invalid project id");
        state[pid].tasks.push(newTask);

        saveState(state);
    }

    function addProject(name) {
       const state = getState();
       state[name] = {};

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