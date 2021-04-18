var database, db, userName, email, year, dept, fatherName, motherName, dob, gender, category, mobNo, religion, age, address, district, state, pinCode;
userName = localStorage.getItem("userName");
email = localStorage.getItem("email");
year = localStorage.getItem("year");
dept = localStorage.getItem("dept");
fatherName = localStorage.getItem("fatherName");
motherName = localStorage.getItem("motherName");
dob = localStorage.getItem("dob");
gender = localStorage.getItem("gender");
category = localStorage.getItem("category");
mobNo = localStorage.getItem("mobNo");
religion = localStorage.getItem("religion");
age = localStorage.getItem("age");
address = localStorage.getItem("address");
district = localStorage.getItem("district");
state = localStorage.getItem("state");
pinCode = localStorage.getItem("pinCode");
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
db = database.doc("cse/"+userName)

function pushData() {
    db.set({
	name: mobNo,
	email: email,
	fatherName: fatherName,
	motherName: motherName,
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
    })
}