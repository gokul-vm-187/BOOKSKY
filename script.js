var container2 = document.getElementById("container2")
var shadow = document.getElementById("shadow")

function menu(){
    container2.style.display="block"
    shadow.style.display="block"
}

function cancel(){
    container2.style.display="none"
    shadow.style.display="none"
}


var container = document.getElementById("container0")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description")

function addbook(){
    var dividerblock = document.createElement("div")
    dividerblock.setAttribute("class", "container1")
    dividerblock.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h4>${bookauthorinput.value}</h4>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">DELETE</button>`
    container.append(dividerblock)
    container2.style.display="none"
    shadow.style.display="none"

    alert("Book Details Added Successfully!!! 🎉")
}

function deletebook(event){
    event.target.parentElement.remove()
}