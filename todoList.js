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
        e.target.classList.toggle("checked"); //Checked mark
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //TO remove a task
    }
}, false);

//but all these things will be despieres when the browser refreshers or leaves
//So need to store it in the browser

//Storing in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);//so whatever detail in listcontainer will be added here
}
