export default class Task {
  constructor({ data }, templateSelector) {
    this._templateSelector = templateSelector;
    this._isChecked = false;
    this._title = data.title;
    this._description = data.description;
  }

  getTemplate() {
    const clonedTask = document
      .querySelector(this._templateSelector)
      .content.querySelector(".task")
      .cloneNode(true);

    return clonedTask;
  }

  _generateCard() {
    this._element = this._getTemplate;

    const taskCheckBox = this._element.querySelector(".task__complete-btn");
    const deleteBtn = this._element.querySelector(".task__delete-btn");
    const title = this._element.querySelector(".task__title");
    const description = this._element.querySelector(".task__description");
    title.textContent = this._title;
    description.textContent = this._description;

    _setEventListener();

    return this._element;
  }

  _setEventListener() {}

  _handleDeleteBtn() {}

  _handleEditBtn() {}

  _handleTaskCheckbox() {}
}
