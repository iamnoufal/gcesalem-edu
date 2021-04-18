var provider = new firebase.auth.GoogleAuthProvider();
var db, user, database, userName, email, pinCode, deptpage, yearpage;
userName = localStorage.getItem("userName");
email = localStorage.getItem("email");
dob = localStorage.getItem("dob");
database = firebase.firestore()
db = database.doc("cse/"+userName)

function googleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        user = result.user;
	localStorage.setItem("userName",user.displayName);
	localStorage.setItem("email",user.email);
	userName = localStorage.getItem("userName");
	email = localStorage.getItem("email");
	if (user!=null) {
	    if (dob!=null) {
		if (!email.includes("@gcesalem.edu")) {
   	            window.location.href="student_dashboard.html"
		} else {
		    window.location.href="teacher_dashboard.html"
		}
	    } else {
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