import "./assets/css/style.css";
import { controller } from "./assets/js/controller";
import { render } from "./assets/js/render";
import { pubsub } from "./assets/js/pubsub";

pubsub.on("project:added", render.projectAdded);
pubsub.on("task:added", render.taskAdded);
pubsub.on("app:ready", render.init);
pubsub.on("project:removed", controller.removeProject);

//load app
controller.init();

