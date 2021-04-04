if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyBF7L0_J-WkYBlDzf_ayeYhxxrirDVWAl0",
  "appId": "1:108760498097:web:ea4c9f1ad00ab71d144790",
  "authDomain": "gcesalem-edu.firebaseapp.com",
  "databaseURL": "https://gcesalem-edu-default-rtdb.firebaseio.com",
  "measurementId": "G-CWPHDLWDNV",
  "messagingSenderId": "108760498097",
  "projectId": "gcesalem-edu",
  "storageBucket": "gcesalem-edu.appspot.com"
});

var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.firestore();
var user, userName, email, year, dept, fatherName, motherName, dob, gender, category, mobNo, religion, age, address, district, state, pinCode;
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
var db = database.doc(dept+"/"+year+"/"userName)

function googleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        user = result.user;
	localStorage.setItem("userName",user.displayName);
	localStorage.setItem("email",user.email);
	if (user!=null) {
	    if (dob!=null) {
		if (!email.includes("@gcesalem.edu")) {
   	            window.location.href="student_dashboard.html"
		} else {
		    window.location.href="teacher_dashboard.html"
		}
	    } else {
		window.location.href="year.html"
	    }
        }
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        console.log(error.message)
     });
}