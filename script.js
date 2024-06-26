var animation = document.getElementsByClassName("animation");

for(var i=0; i < animation.length; i++){
     animation[i].onclick = function(){
        var title = document.getElementById("title");
       title.className = this.value;
     }
}



function toggle(){
    var section = document.getElementById("section");
    var sidenav = document.getElementById("sidenav");
    var title = document.getElementById("title");
    var bottomTitle = document.getElementById("bottom-title");
    var button = document.getElementsByTagName("button");
    var sectionHead = document.getElementById("section-header");
    var mode = document.getElementById("Mode")
    var icons = document.getElementById("icons");

    if(sidenav.style.background == "black"){
         section.style.backgroundColor = "#FCE5CD";
         section.style.color = "black";
         title.style.color = "#351C75";
         bottomTitle.style.color = "#E69138";
         sidenav.style.background = "#F7D7B5";
         sidenav.style.borderLeft = "none"
         sectionHead.style.color = "black";
         mode.innerHTML = "Dark Mode";
         icons.style.background = "black";
         icons.style.color = "white";
         for(var i=0; i<button.length; i++){
              button[i].style.color = "black"
         }
    }else{
         section.style.backgroundColor = "black";
         section.style.color = "white";
         title.style.color = "#4672FE";
         bottomTitle.style.color = "white";
         sidenav.style.background = "black";
         sidenav.style.borderLeft = "2px solid white"
         sectionHead.style.color = "white";
         mode.innerHTML = "Light Mode"
         icons.style.background = "white";
         icons.style.color = "black";
         for(var i=0; i<button.length; i++){
              button[i].style.color = "white"
         }
   }
}

function hide(){
     var sidenav = document.getElementById("sidenav");
     var width = sidenav.style.width;

     if(width == "0px"){
          sidenav.style.width ="260px";
          sidenav.style.transition = "0.3s";
          sidenav.style.display = "block";
     }
     else{
          sidenav.style.width = "0px";
          sidenav.style.transition = "0.3s";
          sidenav.style.display = "block";
     }
}