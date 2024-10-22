document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('#nav ul');
    function toggleMenu() {
        navList.classList.toggle('active');
    }
    menuToggle.addEventListener('click', function() {
        toggleMenu();
       
    });
    navList.querySelectorAll('a').forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                toggleMenu();
                
            }
        });
    });
}); 

const profile=document.getElementById("profile");

function openwin(){
    let profilebox=document.getElementById("profilebox");
    profilebox.style.visibility="visible";
}

const profilebtn=document.getElementById("profilebtn");

function closediv(){
    let profilebox=document.getElementById("profilebox");
    profilebox.style.visibility="hidden";   


}



