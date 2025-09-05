const input = document.getElementById("task-input");/*textbox "add your task" */
const addBtn = document.getElementById("add-btn");/* + button */
const list = document.getElementById("task-list");/*ul reference*/
const progressFill = document.querySelector(".progress-fill");
const progressText = document.getElementById("progress-text");/*span 0/0 */
function updateProgress() {
  let total = list.children.length;                // عدد كل التاسكات
  let done = list.querySelectorAll(".done").length; // عدد المنجزة
  let percent;
if (total > 0) {
  percent = (done / total) * 100;
} else {
  percent = 0;
}
  progressFill.style.width = percent + "%";
  progressText.textContent = `${done}/${total}`;
}
function addTask() {
  if (input.value.trim() === "") {
    alert("Fill The Field");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = `
    <span>${input.value}</span>
    <div>
      <button class="completed">✔</button>
      <button class="delete">🗑</button>
    </div>
  `;
 li.querySelector(".completed").addEventListener("click", () => {
    li.classList.toggle("done");
    updateProgress();
});

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
    updateProgress();
  });
  list.appendChild(li);
  input.value = "";
  updateProgress();
}

addBtn.addEventListener("click", addTask);