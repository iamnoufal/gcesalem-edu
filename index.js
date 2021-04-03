var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.firestore();
var user;
var userName;
var db;

function googleSignIn() {
    firebase.auth()
    .signInWithPopup(provider).then(function(result) {
        user = result.user;
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        console.log(error.message)
     });
}

function student() {
    db.set({category: "Student"});
}

function teacher() {
    db.set({category: "Teacher"});
}