import { pubsub } from "./pubsub";


// singleton
export const render = (() => {
    const sidebar = document.querySelector(".sidebar");
    const buttonNewProject = document.querySelector("#btn-new-project");
    const newProjectOverlay = document.getElementById("modal-overlay");
    const newProjectNameInput = document.getElementById("modal-project-name");
    const newProjectConfirmBtn = document.getElementById("modal-confirm");
    const newProjectCancelBtn = document.getElementById("modal-cancel");

    function init(state) {
        for(const [pid,value] of Object.entries(state)){
            projectAdded(pid);
        }
    }

    function projectAdded( pid ) {
        const projectRow = document.createElement("div");
        projectRow.id = `project_${pid}`;
        const buttonProject = document.createElement("button");
        buttonProject.textContent = pid;
        const buttonRemove = document.createElement("button");
        buttonRemove.textContent = "X";

        if (pid === "default") {
            buttonRemove.disabled = true;
        }

        projectRow.appendChild(buttonProject);
        projectRow.appendChild(buttonRemove);
        sidebar.appendChild(projectRow);

        // bind event
        buttonRemove.addEventListener("click", e => {
            pubsub.emit("ui:remove-project",  pid);
        });
    }

    function projectRemoved(pid) {
        const projectRow = document.querySelector(`#project_${pid}`);
        sidebar.removeChild(projectRow);
    }

    function taskAdded({ pid, task }) {

    }

    function openProjectModal() {
        newProjectNameInput.value = "";
        newProjectOverlay.classList.remove("hidden");
        newProjectNameInput.focus();
    }

    function closeProjectModal() {
        newProjectOverlay.classList.add("hidden");
    }

    // bind button events
    buttonNewProject.addEventListener('click', (e) => {
        openProjectModal();
    });

    newProjectCancelBtn.addEventListener('click', (e)=> {
        closeProjectModal();
    });

    newProjectConfirmBtn.addEventListener('click', (e) => {
        if(!newProjectNameInput.checkValidity()){
            newProjectNameInput.reportValidity();
            return;
        }

        closeProjectModal();

        pubsub.emit("ui:add-project", newProjectNameInput.value.trim());
    });

    return { projectAdded, taskAdded, init, openProjectModal, closeProjectModal, projectRemoved };
})();