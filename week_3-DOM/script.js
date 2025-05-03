let ctr = 1;
function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element)
}
function addTodo() {
    const getEl = document.querySelector("input");
    const value = getEl.value;
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", "todo-" + ctr)
    
    newDivEl.innerHTML = '<div class="task"><p>' + value + '</p><ion-icon onclick="deleteTodo(' + ctr + ')" name="trash-outline"></ion-icon></div>'
    document.getElementById("taskListdiv").appendChild(newDivEl);
    ctr++;

}

