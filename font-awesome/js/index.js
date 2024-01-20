const menubar=document.getElementById("bars");
const closemenu= document.querySelector(".fa-xmark");
const mobilemenu= document.getElementById("mobilemenu");


menubar.addEventlisten("click" ,function() {
    mobilemenu.style.display="block";
    closemenu.style.display="block";
    menubar.style.display="none";

});
closemenu.addEventlisten("click" ,function(){
    mobilemenu.style.display="none";
    closemenu.style.display="none";
    menubar.style.display="block";

});