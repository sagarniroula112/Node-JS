// 1 (SELECTION OF ELEMENT)
var B = document.querySelector("h1")
console.log(B)

// 2 (CHANGING HTML)
var a = document.querySelector("h1")
a.innerHTML = "New Heading"
// OR
// document.querySelector("h1").innerHTML = "New Heading"

// 3 (CHANGING STYLE)
a.style.color = "white"
a.style.backgroundColor = "black"

// 4 (EVENT LISTENER)
a.addEventListener("click", function(){
    console.log("You clicked the heading.")
    a.innerHTML = "Why did you click me?";
    a.style.color = "crimson";
    a.style.backgroundColor = "black";
})

