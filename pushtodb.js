var database, db, deptDB, studentDB, userName, email, year, dept, fatherName, motherName, dob, gender, category, mobNo, religion, age, address, district, state, pinCode;
userName = window.sessionStorage.getItem("userName");
email = window.sessionStorage.getItem("email");
year = window.sessionStorage.getItem("year");
dept = window.sessionStorage.getItem("dept");
fatherName = window.sessionStorage.getItem("fatherName");
motherName = window.sessionStorage.getItem("motherName");
dob = window.sessionStorage.getItem("dob");
gender = window.sessionStorage.getItem("gender");
category = window.sessionStorage.getItem("category");
mobNo = window.sessionStorage.getItem("mobNo");
religion = window.sessionStorage.getItem("religion");
age = window.sessionStorage.getItem("age");
address = window.sessionStorage.getItem("address");
district = window.sessionStorage.getItem("district");
state = window.sessionStorage.getItem("state");
pinCode = window.sessionStorage.getItem("pinCode");
function showDetails() {
document.getElementById("name").innerHTML=userName;
document.getElementById("fatherName").innerHTML=fatherName;
document.getElementById("motherName").innerHTML=motherName;
document.getElementById("dob").innerHTML=dob;
document.getElementById("age").innerHTML=age;
document.getElementById("gender").innerHTML=gender;
document.getElementById("religion").innerHTML=religion;
document.getElementById("category").innerHTML=category;
document.getElementById("mobNo").innerHTML=mobNo;
document.getElementById("address").innerHTML=address;
document.getElementById("district").innerHTML=district;
document.getElementById("state").innerHTML=state;
document.getElementById("pinCode").innerHTML=pinCode;
}
database = firebase.firestore()
db = database.collection("students")
deptDB = db.doc(dept)
studentDB = deptDB.collection(year).doc(userName)

function pushData() {
    studentDB.set({
	name: userName,
	email: email,
	fatherName: fatherName,
	motherName: motherName,
	yesr: year,
	department: dept,
	dob: dob,
	gender: gender,
	age: age,
	category: category,
	mobNo: mobNo,
	religion: religion,
	address: address,
	district: district,
	state: state,
	pinCode: pinCode
    }).then((success) => {window.location.href="student_dashboard.html"})
}