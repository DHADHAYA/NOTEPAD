const notesContainer = document.querySelector(".notescontainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputbox");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes" ,notesContainer.innerHTML);
}

createBtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputbox";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll("inputbox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})