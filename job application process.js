function collectInfo(callback) {
  console.log("Information collected.");
  callback(); 
}

let processApplication = function() {
  console.log("Application processed.");


  let thankYou = () => {
    console.log("Thank you for applying!");
  };


  thankYou();
};

collectInfo(processApplication);