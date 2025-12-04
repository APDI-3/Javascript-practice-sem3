function register(callback) {
  console.log("Data saved.");
  callback(); 
}

register(() => {
  console.log("Registration successful.");
});
