let comments = [
  { id: 1, name: "Jordan", msg: "First!", likes: 0, liked: false },
  { id: 2, name: "Ava", msg: "Nice work.", likes: 2, liked: false },
];

const form = document.querySelector("#commentForm");
const nameInput = document.querySelector("#nameInput");
const msgInput = document.querySelector("#msgInput");
const list = document.querySelector("#commentList");
const stats = document.querySelector("#stats");
const sortLikesBtn = document.querySelector("#sortLikesBtn");
const clearBtn = document.querySelector("#clearBtn");
const template = document.querySelector("#commentTemplate");

function buildCommentElement(comment) {
  const commentTemplate = template.content
    .querySelector(".comment")
    .cloneNode(true);
  const commentName = commentTemplate.querySelector(".comment__name");
  const commentMsg = commentTemplate.querySelector(".comment__msg");
  const likeBtn = commentTemplate.querySelector(".like");
  const deleteBtn = commentTemplate.querySelector(".delete");
  commentName.textContent = comment.name;
  commentMsg.textContent = comment.msg;
  likeBtn.addEventListener("click", () => {});

  deleteBtn.addEventListener("click", () => {});

  return commentTemplate;
}

function renderAll() {}

function updateStats() {}

/*
YOU BUILD:

1. buildCommentElement(comment)
2. renderAll()
3. updateStats()
4. form submit logic
5. sort logic
6. clear logic
*/

renderAll();
