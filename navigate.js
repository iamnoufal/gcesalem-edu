var deptpage = document.getElementById("dept");
var yearpage = document.getElementById("year");
var dept = window.sessionStorage.getItem("dept");
var deptDB, studentDB;

function setDept(dept) {
    window.sessionStorage.setItem("dept",dept);
    deptpage.style.display="none";
    yearpage.style.display="block";
    deptDB = db.doc(dept)
}

function setYear(yr) {
    window.sessionStorage.setItem("year",yr);
    studentDB = deptDB.collection(yr).doc(userName)
    studentDB.onSnapshot((doc) => {
	if (doc.data()!=undefined) {
	    window.location.href="student_dashboard.html";
	} else {
	    window.location.href="student_form.html";
	}
    })
}