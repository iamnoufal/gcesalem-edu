var deptpage = document.getElementById("dept");
var yearpage = document.getElementById("year");
var dept = localStorage.getItem("dept");

function setDept(dept) {
    localStorage.setItem("dept",dept);
    deptpage.style.display="none";
    yearpage.style.display="block";
}

function setYear(yr) {
    localStorage.setItem("year",yr);
    window.location.href="student_form.html";
}