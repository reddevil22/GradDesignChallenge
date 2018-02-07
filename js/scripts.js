/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/

function toggle(id) {

    let sectiontohide = document.getElementById('sectionToHide');
    
    if (sectiontohide.style.display == 'none') {
        sectiontohide.style.display = 'block';
    }
    else {
        sectiontohide.style.display = 'none';
    }
    
    let toggle = document.getElementById('toggle');
    if (toggle.innerHTML == 'Hide content') {
       toggle.innerHTML = 'Show content';
    }
   else {
       toggle.innerHTML = 'Hide content';
    }
}