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

// navbar finish




// year onclick functionality


function showFirstYearSyllabus() {
    document.getElementById("firstYearSyllabus").classList.remove("hidden");
    document.getElementById("secondYearSyllabus").classList.add("hidden");
    document.getElementById("thirdYearSyllabus").classList.add("hidden");
    document.getElementById("fourthYearSyllabus").classList.add("hidden");
}

function showSecondYearSyllabus() {
    document.getElementById("firstYearSyllabus").classList.add("hidden");
    document.getElementById("secondYearSyllabus").classList.remove("hidden");
    document.getElementById("thirdYearSyllabus").classList.add("hidden");
    document.getElementById("fourthYearSyllabus").classList.add("hidden");
}

function showThirdYearSyllabus() {
    document.getElementById("firstYearSyllabus").classList.add("hidden");
    document.getElementById("secondYearSyllabus").classList.add("hidden");
    document.getElementById("thirdYearSyllabus").classList.remove("hidden");
    document.getElementById("fourthYearSyllabus").classList.add("hidden");
}

function showFourthYearSyllabus() {
    document.getElementById("firstYearSyllabus").classList.add("hidden");
    document.getElementById("secondYearSyllabus").classList.add("hidden");
    document.getElementById("thirdYearSyllabus").classList.add("hidden");
    document.getElementById("fourthYearSyllabus").classList.remove("hidden");
}