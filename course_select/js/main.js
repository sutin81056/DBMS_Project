let Monday = document.getElementsByClassName("Monday");
let Tuesday = document.getElementsByClassName("Tuesday");
let Wednesday = document.getElementsByClassName("Wednesday");
let Thursday = document.getElementsByClassName("Thursday");
let Friday = document.getElementsByClassName("Friday");
let Saturday = document.getElementsByClassName("Saturday");
let Sunday = document.getElementsByClassName("Sunday");
let week = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}