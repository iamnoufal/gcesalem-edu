function pushData() {
    window.sessionStorage.setItem("fatherName",document.getElementById("fatherName").value);
    window.sessionStorage.setItem("motherName",document.getElementById("motherName").value);
    window.sessionStorage.setItem("dob",document.getElementById("dob").value);
    window.sessionStorage.setItem("age",document.getElementById("age").value);
    window.sessionStorage.setItem("gender",document.getElementById("gender").value);
    window.sessionStorage.setItem("religion",document.getElementById("religion").value);
    window.sessionStorage.setItem("category",document.getElementById("category").value);
    window.sessionStorage.setItem("mobNo",document.getElementById("mobNo").value);
    window.sessionStorage.setItem("address",document.getElementById("address").value);
    window.sessionStorage.setItem("district",document.getElementById("district").value);
    window.sessionStorage.setItem("state",document.getElementById("state").value);
    window.sessionStorage.setItem("pinCode",document.getElementById("pinCode").value);
}