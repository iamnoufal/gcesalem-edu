var database, db, deptDB, studentDB, dept, year, userName;
userName = window.sessionStorage.getItem("userName");
dept = window.sessionStorage.getItem("dept");
year = window.sessionStorage.getItem("year");
database = firebase.firestore()
db = database.collection("students")
deptDB = db.doc(dept)
studentDB = deptDB.collection(year).doc(userName)

function showDetails() {
    studentDB.onSnapshot((doc) => {
	document.getElementById("name").innerHTML=doc.data().name;
	document.getElementById("fatherName").innerHTML=doc.data().fatherName;
	document.getElementById("motherName").innerHTML=doc.data().motherName;
	document.getElementById("dob").innerHTML=doc.data().dob;
	document.getElementById("age").innerHTML=doc.data().age;
	document.getElementById("gender").innerHTML=doc.data().gender;
	document.getElementById("religion").innerHTML=doc.data().religion;
	document.getElementById("category").innerHTML=doc.data().category;
	document.getElementById("mobNo").innerHTML=doc.data().mobNo;
	document.getElementById("address").innerHTML=doc.data().address;
	document.getElementById("district").innerHTML=doc.data().district;
	document.getElementById("state").innerHTML=doc.data().state;
	document.getElementById("pinCode").innerHTML=doc.data().pinCode;
    })
}