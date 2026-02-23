//header/filter elements
const addTaskBtn = document.querySelector(".header__add-btn");
const filterBtns = document.querySelectorAll(".task__filter-btn");

// task elements
const taskTemplate = document.querySelector("#task__template");
const taskList = document.querySelector(".tasks");

//modal elements
const modal = document.querySelector(".modal");
const form1 = document.forms.form1;
const formCloseBtn = form1.elements.closeBtn;

// define state (data)

let tasks = [];
let currentFilter = "all";

//open & close modal
function openModal() {
  modal.classList.remove("modal_hidden");
}

function closeModal() {
  modal.classList.add("modal_hidden");
}

// validation functions

function showError(input, messageElement) {}

console.log(formCloseBtn);
