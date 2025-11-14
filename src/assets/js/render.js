import { pubsub } from "./pubsub";


// singleton
export const render = (() => {
    const sidebar = document.querySelector(".sidebar");
    // project
    const buttonNewProject = document.querySelector("#btn-new-project");
    const newProjectOverlay = document.querySelector("#modal-overlay");
    const newProjectNameInput = document.querySelector("#modal-project-name");
    const newProjectConfirmBtn = document.querySelector("#modal-confirm");
    const newProjectCancelBtn = document.querySelector("#modal-cancel");
    const activeProjectNameElement = document.querySelector("#activeProjectName");
    // task
    const formTask = document.querySelector("#task-form");
    const newTaskOverlay = document.querySelector("#modal-overlay-task");
    const newTaskCancelBtn = document.querySelector("#modal-task-cancel");
    const newTaskOpenModalBtn = document.querySelector("#addNewTask");
    const taskBox = document.querySelector("#task-box");

    function init(state) {
        for(const [pid,value] of Object.entries(state.data)){
            projectAdded(pid);
            for(const [i,task] of Object.entries(value.tasks)){
                taskAdded(task);
            }
        }

        activeProjectNameElement.textContent = state.default_project;
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

        // bind events
        buttonProject.addEventListener("click", (e) => {
            pubsub.emit("ui:change-active-project", pid);
        });

        buttonRemove.addEventListener("click", e => {
            pubsub.emit("ui:remove-project",  pid);
        });
    }

    function projectRemoved(pid) {
        const projectRow = document.querySelector(`#project_${pid}`);
        sidebar.removeChild(projectRow);
    }

    function onChangeactiveProject(project) {
        activeProjectNameElement.textContent = project.name;
    }

    function taskAdded(task) {
        console.log(task);
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskTitle = document.createElement("h3");
        taskTitle.textContent = task.title;

        const taskDesciption = document.createElement("p");
        taskDesciption.textContent = task.description;

        const taskPriorityBox = document.createElement("div");
        taskPriorityBox.classList.add("task-priority.box");

        const taskDueDate = document.createElement("span");
        taskDueDate.textContent = new Date(task.dueDate).toString();
        taskDueDate.classList.add("task-dueDate");

        const taskPriority = document.createElement("span");
        taskPriority.textContent = task.priority;
        taskPriority.classList.add("task-priority");
        
        taskPriorityBox.appendChild(taskDueDate);
        taskPriorityBox.appendChild(taskPriority);

        const taskNotes = document.createElement("textarea");
        taskNotes.classList.add("task-notes");
        taskNotes.readOnly = true;
        
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDesciption);
        taskDiv.appendChild(taskPriorityBox);
        taskDiv.appendChild(taskNotes);

        taskBox.appendChild(taskDiv);
    }

    function openProjectModal() {
        newProjectNameInput.value = "";
        newProjectOverlay.classList.remove("hidden");
        newProjectNameInput.focus();
    }

    function closeProjectModal() {
        newProjectOverlay.classList.add("hidden");
    }

    function closeTaskModal() {
        formTask.reset();
        newTaskOverlay.classList.add("hidden");
    }

    function openTaskModal() {
        newTaskOverlay.classList.remove("hidden");
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

    formTask.addEventListener('submit', (e)=> {
        e.preventDefault();

        const data = new FormData(formTask);

        const task = {
            title: data.get("task-title"),
            description: data.get("task-description"),
            dueDate: data.get("task-dueDate"),
            priority: data.get("task-priority"),
            notes: data.get("task-notes")
        };

        pubsub.emit("ui:add-task", task);

        closeTaskModal();
    });

    newTaskOpenModalBtn.addEventListener('click', (e) => {
        openTaskModal();
    });

    newTaskCancelBtn.addEventListener('click', (e) => {
        closeTaskModal();
    });

    return { projectAdded, taskAdded, init, openProjectModal, closeProjectModal, projectRemoved, onChangeactiveProject };
})();