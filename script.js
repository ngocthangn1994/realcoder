window.onload = showTask;

function showTask(){
  const taskList = document.getElementById("taskList");
  
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    taskList.appendChild(li);

    
    if(task.completed){
      li.style.textDecoration = "line-through";
    }

    li.onclick = ()=>{
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTask()
    }    

    li.oncontextmenu = (event)=>{
      event.preventDefault();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTask()
    }
    taskList.appendChild(li);
  });
}

function addTask(){
  const input = document.getElementById("input");
  const task = input.value.trim();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (task === ""){
    return;
  }
  tasks.push({text: task, completed: false});

  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  showTask();
}





const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
window.onload = showNote;


function showNote(){

    const listNote = document.getElementById("listNote");
    listNote.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note,index) => {
        const noteDiv = document.createElement("div");
        const deleteBtn = document.createElement("button")
        noteDiv.className = "note";
        noteDiv.textContent = note;

     
        deleteBtn.onclick = ()=> {
            deleteButton(index)
        }
        noteDiv.appendChild(deleteBtn)
        listNote.appendChild(noteDiv);

    });
}

function deleteButton(index){
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notes))
    showNote()
}

function addNote(){
    const textArea = document.getElementById("textarea");
    const note = textArea.value.trim();
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (note == "") return;
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes))
    textArea.value = "";
    showNote()
}