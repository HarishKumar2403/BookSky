
var popoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".pop-upbox")
var addpopup=document.getElementById("add-popup-button")
addpopup.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})

function del(event){
    event.target.parentElement.remove()
}

var bookcancel=document.getElementById("book-cancel")

bookcancel.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"

})
var container=document.querySelector(".container")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")
var bookadd=document.getElementById("book-add")
var bookdelete=document.querySelector(".btn")

bookadd.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-content")
    div.innerHTML=`<h2 class="title">${booktitle.value}</h2>
    <h5 class="author">${bookauthor.value}</h5>
    <p class="description">${bookdescription.value}</p>
    <button class="btn" onclick="del(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
})