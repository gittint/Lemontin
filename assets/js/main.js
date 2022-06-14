
//xử lý slide ở file index (trang chủ)

var menuslides = document.querySelectorAll(".app-container__banner-img.app-container__banner-img-js");
console.log(menuslides)

var menudoticons = document.querySelectorAll(".dot-icon");
console.log(menudoticons)

function clickdot(this_slide){
    if (this_slide >= menuslides.length){
        slideIndex = 0;
    }    

    if (this_slide < 0) {
        slideIndex = menuslides.length-1;
    }

    var i;
    for (i = 0; i < menuslides.length; i++) {
        menuslides[i].classList.remove("app-container__banner-img--active");  
    }
    menuslides[this_slide].classList.add("app-container__banner-img--active");

    for (i = 0; i < menudoticons.length; i++) {
        menudoticons[i].style.color = "#3ba9a0";  
    }
    menudoticons[this_slide].style.color = "black";
}

var x = 1;
var auto = setInterval(function(){
    clickdot(x);
    x=x+1;
    if (x >= menuslides.length){
        x = 0;
    }
    return x;
},5000);

//Xử lý menu ở file index (trang chủ)

// var menuitems = document.getElementsByClassName("main-menu__list-item--link");
// console.log(menuitems);
var menuimgs = document.getElementsByClassName("main-menu__list-item--box");
console.log(menuimgs)

var red_icons = document.querySelectorAll("i.main-menu__list-item--icon-active");
console.log(red_icons)
for (i = 0; i < red_icons.length; i++) {
    red_icons[i].style.display = "none";  
}

var black_icons = document.querySelectorAll(".main-menu__list-item--icon");
console.log(black_icons)
for (i = 0; i < black_icons.length; i++) {
    black_icons[i].style.display = "block";  
}

function hovermenuitem(n){
    var i;
    for (i = 0; i < menuimgs.length; i++) {
        menuimgs[i].classList.remove("main-menu__list-item--box--active");  
    }
    menuimgs[n].classList.add("main-menu__list-item--box--active");

    for (i = 0; i < red_icons.length; i++) {
        red_icons[i].style.display = "none";  
    }
    red_icons[n].style.display = "block";
    
    for (i = 0; i < black_icons.length; i++) {
        black_icons[i].style.display = "block";  
    }
    black_icons[n].style.display = "none";
}
