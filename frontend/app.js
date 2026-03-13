document.getElementById("form").addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;

await fetch("http://backend:5000/register",{

method: "POST",
headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({name,email})

});

alert("User Registered");

});
