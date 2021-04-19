var provider = new firebase.auth.GoogleAuthProvider();
var db, user, database, userName, email, pinCode, deptpage, yearpage;
userName = window.sessionStorage.getItem("userName");
email = window.sessionStorage.getItem("email");
dob = window.sessionStorage.getItem("dob");
database = firebase.firestore()

function googleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        user = result.user;
	window.sessionStorage.setItem("userName",user.displayName);
	window.sessionStorage.setItem("email",user.email);
	userName = window.sessionStorage.getItem("userName");
	email = window.sessionStorage.getItem("email");
	if (user!=null) {
	    if (email.includes("@gcesalem.edu")) {
   	        db = database.collection("teachers");
		db.onSnapshot((doc) => {
		    if (doc.data()) {
			window.location.href="teacher_daxhboard.html";
		    } else {
			window.location.href="teacher_form.html"
		    }
		})
	    } else {
		db = database.collection("students")
	        signin.style.display="none";
		deptpage.style.display="block";
	    }
        }
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        console.log(error.message)
     });
}