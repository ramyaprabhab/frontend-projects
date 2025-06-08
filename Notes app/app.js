let notesContainer= document.querySelector(".notes-container");
let btn= document.querySelector(".btn");
let notes =document.querySelectorAll(".input-box");

btn.addEventListener("click",()=>{
    let inputBox =document.createElement("p");
    let img= document.createElement("img");
    inputBox.className="input-box";
    img.className="del-icon";
    inputBox.setAttribute("contenteditable", "true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

img.addEventListener("click", () => {
    notesContainer.(inputBox);
});
 


