var dept = localStorage.getItem("dept");

if (dept=="cse") {
    document.body.style.backgroundImage="url('cse.jpeg')";
} else if (dept=="ece") {
    document.body.style.backgroundImage="url('cse.jpeg')";
} else if (dept=="eee") {
    document.body.style.backgroundImage="url('cse.jpeg')";
} else if (dept=="civil") {
    document.body.style.backgroundImage="url('cse.jpeg')";
} else if (dept=="mech") {
    document.body.style.backgroundImage="url('cse.jpeg')";
} else {
    document.body.style.backgroundImage="url('cse.jpeg')";
}


function pushData() {
    localStorage.setItem("fatherName",document.getElementById("fatherName").value);
    localStorage.setItem("motherName",document.getElementById("motherName").value);
    localStorage.setItem("dob",document.getElementById("dob").value);
    localStorage.setItem("age",document.getElementById("age").value);
    localStorage.setItem("gender",document.getElementById("gender").value);
    localStorage.setItem("religion",document.getElementById("religion").value);
    localStorage.setItem("category",document.getElementById("category").value);
    localStorage.setItem("mobNo",document.getElementById("mobNo").value);
    localStorage.setItem("address",document.getElementById("address").value);
    localStorage.setItem("district",document.getElementById("district").value);
    localStorage.setItem("state",document.getElementById("state").value);
    localStorage.setItem("pinCode",document.getElementById("pinCode").value);
}