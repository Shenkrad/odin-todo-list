import { pubsub } from "./pubsub";


// singleton
export const render = (() => {
    const sidebar = document.querySelector(".sidebar");

    function init(state) {
        for(const [pid,value] of Object.entries(state)){
            projectAdded({pid});
            // element.tasks.forEach(element => {

            // });
        }
    }

    function projectAdded({ pid }) {
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
            pubsub.emit("project:removed",  pid);
        });
    }

    function taskAdded({ pid, task }) {

    }

    return { projectAdded, taskAdded, init };
})();