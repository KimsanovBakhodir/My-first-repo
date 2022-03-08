"use strict";



// DOM stands for document object model

const greeting = document.getElementById("greeting"),        // eski yo'l
    paragraph = document.getElementsByTagName("p"),          // eski yo'l
    wrapper = document.getElementsByClassName("wrapper");    // eski yo'l



// greeting.style.color = "red";
// greeting.style.backgroundColor = "black";
// greeting.style.display = "inline-block";



greeting.style.cssText = "maegin: 10px; font-size: 16px";



greeting.classList.add("cssH1");  // remove olib tashlaydi

console.log(wrapper);









const wrapper1 = document.querySelector(".wrapper"),   // id # bilan, class . bilan, tag o'zining nomi bilan
    btns = document.querySelectorAll("button");


// btns[1].style.background = "crimson";   // eski usul



btns.forEach((btn) => {
    btn.style.backgroundColor = "red";
    btn.style.outline = "none";
    btn.style.border = "none";
});



for(let i = 0; i < btns.length; i++) {
    btns[i].style.padding = "10px";
};







console.log(wrapper1)
console.log(btns)
















