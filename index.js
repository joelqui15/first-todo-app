//header elements
const addTaskBtn = document.querySelector(".header__add-btn");
const filterBtns = document.querySelectorAll(".task__filter-btn");

// task elements
const taskTemplate = document.querySelector("#task__template");
const clonedTemplate = taskTemplate.content.cloneNode(true);
const task = clonedTemplate.querySelector(".task");
const taskTitle = task.querySelector(".task__title");
const taskDescription = task.querySelector(".task__description");

//modal elements
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__container");
