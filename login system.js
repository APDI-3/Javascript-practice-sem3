function checkUser(callback) {
  console.log("User verified.");
  callback(); 
}


function welcomeUser() {
  console.log("Welcome to your account.");
}


checkUser(welcomeUser);

