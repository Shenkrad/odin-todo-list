import "./assets/css/style.css";
import { controller } from "./assets/js/controller";
import { render } from "./assets/js/render";
import { pubsub } from "./assets/js/pubsub";

pubsub.on("project:added", render.projectAdded);
pubsub.on("task:added", render.taskAdded);
pubsub.on("app:ready", render.init);
pubsub.on("ui:remove-project", controller.removeProject);
pubsub.on("ui:add-project", controller.addProject);
pubsub.on("project:removed", render.projectRemoved);
pubsub.on("ui:change-active-project", controller.changeActiveProject);
pubsub.on("project:active-changed", render.onChangeactiveProject);

//load app
controller.init();

