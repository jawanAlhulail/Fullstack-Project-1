document.querySelector('.burger').addEventListener("click", () => document.querySelector("header").classList.toggle("is-active"));
 let widgets = document.querySelector(".widgets");
    if (widgets.classList.contains("is-searchResults")) {
        widgets.innerHTML = null;}
       
document.querySelector(".button-is-primary").addEventListener("click", function(){
  event.preventDefault();
fetch("./data.json", {
mode : "no-cors",
headers : {
"Application-Type" : "application/json"
}
}).then(res => res.json())
.then(res => {
   
if(document.getElementById("area").value == "salwa"){ 
    document.querySelector(".widgets").innerHTML = null
    res.array1.map(item => {if (item.location == document.getElementById("area").value) {
        let widgetdiv = document.createElement("div");
        widgetdiv.classList += "widget";
        let imagediv = document.createElement("div");
        imagediv.classList += "widget__image";
        let image = document.createElement("img");
        image.src = item.image;
        imagediv.appendChild(image);
        widgetdiv.appendChild(imagediv);
        let widgetdesc = document.createElement("div");
        widgetdesc.classList += "widget__desc";
        let widgetitle = document.createElement("h1");
        widgetitle.innerHTML = `${item.name}`;
        let widgetage = document.createElement("p");
        widgetage.innerHTML = `${item.age + " " + "|" + " " + item.gender}`;
        let widgetcity = document.createElement("p");
        widgetcity.innerHTML = `${item.location}`;
        widgetdesc.appendChild(widgetitle);
        widgetdesc.appendChild(widgetage);
        widgetdesc.appendChild(widgetcity);
        widgetdiv.appendChild(widgetdesc);
        widgets.appendChild(widgetdiv);
      }
    })

}
else if(document.getElementById('area').value == "mishref"){
    document.querySelector(".widgets").innerHTML = null
    res.array2.map(item => {if (item.location == document.getElementById("area").value) {
        let widgetdiv = document.createElement("div");
        widgetdiv.classList += "widget";
        let imagediv = document.createElement("div");
        imagediv.classList += "widget__image";
        let image = document.createElement("img");
        image.src = item.image;
        imagediv.appendChild(image);
        widgetdiv.appendChild(imagediv);
        let widgetdesc = document.createElement("div");
        widgetdesc.classList += "widget__desc";
        let widgetitle = document.createElement("h1");
        widgetitle.innerHTML = `${item.name}`;
        let widgetage = document.createElement("p");
        widgetage.innerHTML = `${item.age + " " + "|" + " " + item.gender}`;
        let widgetcity = document.createElement("p");
        widgetcity.innerHTML = `${item.location}`;
        widgetdesc.appendChild(widgetitle);
        widgetdesc.appendChild(widgetage);
        widgetdesc.appendChild(widgetcity);
        widgetdiv.appendChild(widgetdesc);
        widgets.appendChild(widgetdiv);
      }
    })
}
else if(document.getElementById('area').value == "bayan"){
    document.querySelector(".widgets").innerHTML = null
    res.array3.map(item => {if (item.location == document.getElementById("area").value) {
        let widgetdiv = document.createElement("div");
        widgetdiv.classList += "widget";
        let imagediv = document.createElement("div");
        imagediv.classList += "widget__image";
        let image = document.createElement("img");
        image.src = item.image;
        imagediv.appendChild(image);
        widgetdiv.appendChild(imagediv);
        let widgetdesc = document.createElement("div");
        widgetdesc.classList += "widget__desc";
        let widgetitle = document.createElement("h1");
        widgetitle.innerHTML = `${item.name}`;
        let widgetage = document.createElement("p");
        widgetage.innerHTML = `${item.age + " " + "|" + " " + item.gender}`;
        let widgetcity = document.createElement("p");
        widgetcity.innerHTML = `${item.location}`;
        widgetdesc.appendChild(widgetitle);
        widgetdesc.appendChild(widgetage);
        widgetdesc.appendChild(widgetcity);
        widgetdiv.appendChild(widgetdesc);
        widgets.appendChild(widgetdiv);
      }
    })
}
else if(document.getElementById('area').value == "subah alsalem"){
    document.querySelector(".widgets").innerHTML = null
    res.array4.map(item => {if (item.location == document.getElementById("area").value) {
        let widgetdiv = document.createElement("div");
        widgetdiv.classList += "widget";
        let imagediv = document.createElement("div");
        imagediv.classList += "widget__image";
        let image = document.createElement("img");
        image.src = item.image;
        imagediv.appendChild(image);
        widgetdiv.appendChild(imagediv);
        let widgetdesc = document.createElement("div");
        widgetdesc.classList += "widget__desc";
        let widgetitle = document.createElement("h1");
        widgetitle.innerHTML = `${item.name}`;
        let widgetage = document.createElement("p");
        widgetage.innerHTML = `${item.age + " " + "|" + " " + item.gender}`;
        let widgetcity = document.createElement("p");
        widgetcity.innerHTML = `${item.location}`;
        widgetdesc.appendChild(widgetitle);
        widgetdesc.appendChild(widgetage);
        widgetdesc.appendChild(widgetcity);
        widgetdiv.appendChild(widgetdesc);
        widgets.appendChild(widgetdiv);
      }
    })
}
else if(document.getElementById('area').value == "hawali"){
    document.querySelector(".widgets").innerHTML = null
    res.array5.map(item => {if (item.location == document.getElementById("area").value) {
        let widgetdiv = document.createElement("div");
        widgetdiv.classList += "widget";
        let imagediv = document.createElement("div");
        imagediv.classList += "widget__image";
        let image = document.createElement("img");
        image.src = item.image;
        imagediv.appendChild(image);
        widgetdiv.appendChild(imagediv);
        let widgetdesc = document.createElement("div");
        widgetdesc.classList += "widget__desc";
        let widgetitle = document.createElement("h1");
        widgetitle.innerHTML = `${item.name}`;
        let widgetage = document.createElement("p");
        widgetage.innerHTML = `${item.age + " " + "|" + " " + item.gender}`;
        let widgetcity = document.createElement("p");
        widgetcity.innerHTML = `${item.location}`;
        widgetdesc.appendChild(widgetitle);
        widgetdesc.appendChild(widgetage);
        widgetdesc.appendChild(widgetcity);
        widgetdiv.appendChild(widgetdesc);
        widgets.appendChild(widgetdiv);
      }
    })
}
else{
document.querySelector(".widgets").innerHTML = `<h1>no results found</h1>`
}
})
.catch(err => console.log(err))
})



const stories = [
  {
    id : "0540",
    story : "1    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  imageUrl : "./images/pet-04.png",
  title : "this is how i  met kori"
  },
  {
    id : "0541",
    story : "2    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  imageUrl : "./images/pet-03.png",
  title : "i cant live without nochi"
  },
  {
    id : "0542",
    story : "3    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  imageUrl : "./images/pet-02.png",
  title : "my cat my new friend"
  },
]

 const storiesCon = document.querySelector(".stories .widgets")
 storiesCon.innerHTML = ''


stories.map((item) => {
const widget = document.createElement('div');
widget.classList.add("widget");
const widgetImage = document.createElement('div');
widgetImage.classList.add("widget__image");
const img = document.createElement('img');
img.src = item.imageUrl
widgetImage.appendChild(img);
widget.appendChild(widgetImage);
storiesCon.appendChild(widget);
const desc = document.createElement('div');
const h4 = document.createElement('h4');
h4.innerHTML = item.title;
const p = document.createElement('p')
p.innerHTML = item.story;
desc.appendChild(h4)
desc.appendChild(p)
widget.appendChild(desc)
})