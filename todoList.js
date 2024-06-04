const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!"); //if user input is null
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value; //adding the text to li varible--> so the user input will be the one which added to the variable
        listContainer.appendChild(li);

        //adding the close element
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""; //intizialize the value to null again once entered

}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

