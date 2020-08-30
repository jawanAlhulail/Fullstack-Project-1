document.querySelector('.burger').addEventListener("click", () => document.querySelector("header").classList.toggle("is-active"));
function search(){
fetch("./data.json", {
mode : "no-cors",
headers : {
"Application-Type" : "application/json"
} 
}).then(res => res.json())
.then(res => {
if(document.getElementById("area").value == "salwa"){
let list = res.array.map(item => `<li>${item.species}</li>`)
document.querySelector("#li-result").innerHTML = list
document.getElementById("li-result").innerHTML += "<li>" + array.species + " </li>"
}
else if(document.getElementById('area').value == "mishref"){
let list = res.array2.map(item => `<li>${item.species2}</li>`)
document.querySelector("#li-result").innerHTML = list
document.getElementById("li-result").innerHTML += "<li>" + array2.species2 + " </li>";         
}
else if(document.getElementById('area').value == "bayan"){
let list = res.array3.map(item => `<li>${item.species3}</li>`)
document.querySelector("#li-result").innerHTML = list
document.getElementById("li-result").innerHTML += "<li>" + array3.species2 + " </li>";
}
else if(document.getElementById('area').value == "subah alsalem"){
let list = res.array4.map(item => `<li>${item.species4}</li>`)
document.querySelector("#li-result").innerHTML = list
document.getElementById("li-result").innerHTML += "<li>" + array4.species4 + " </li>";
}
else if(document.getElementById('area').value == "hawali"){
let list = res.array5.map(item => `<li>${item.species5}</li>`)
document.querySelector("#li-result").innerHTML = list
document.getElementById("li-result").innerHTML += "<li>" + array5.species5 + " </li>";
}
else{
document.getElementById("li-result").innerHTML += "<h1>" + "no results" + " </h1>";
}
})
.catch(err => console.log(err))
}

function story(){
fetch("./data.json", {
mode : "no-cors",
headers : {
"Application-Type" : "application/json"
} 
}).then(res => res.json())
.then(res => {
document.getElementById("story-result").innerHTML = null ;
if(document.getElementById("area").value == "salwa"){
let list = res.details.map(item =>{ `<li>${item.story}</li>`
document.getElementById("story-result").innerHTML += "<li>" + item.story + " </li>"
document.getElementById("story-result").innerHTML += `<img src="${item.image}">` 
})
}else if(document.getElementById('area').value == "mishref"){
let list = res.details2.map(item =>{ `<li>${item.story}</li>`
document.getElementById("story-result").innerHTML += "<li>" + item.story + " </li>"
document.getElementById("story-result").innerHTML += `<img src="${item.image}">`
})
}else if(document.getElementById('area').value == "bayan"){
let list = res.details3.map(item =>{ `<li>${item.story}</li>`
document.getElementById("story-result").innerHTML += "<li>" + item.story + " </li>"
document.getElementById("story-result").innerHTML += `<img src="${item.image}">`
})
}
else if(document.getElementById('area').value == "subah alsalem"){
let list = res.details4.map(item =>{ `<li>${item.story}</li>`
document.getElementById("story-result").innerHTML += "<li>" + item.story + " </li>"
document.getElementById("story-result").innerHTML += `<img src="${item.image}">`
})
}else if(document.getElementById('area').value == "hawali"){
let list = res.details5.map(item =>{ `<li>${item.story}</li>`
document.getElementById("story-result").innerHTML += "<li>" + item.story + " </li>"
document.getElementById("story-result").innerHTML += `<img src="${item.image}">`
})
}
else{
document.getElementById("story-result").innerHTML += "<h1>" + "no results" + " </h1>";
}
}
)}