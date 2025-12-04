function greetUser(name, hour) {
  if (hour < 12) {
    console.log("Good Morning, " + name);
  } else if (hour < 18) {
    console.log("Good Afternoon, " + name);
  } else {
    console.log("Good Evening, " + name);
  }
}


greetUser("APDI", 10);
greetUser("APDI", 15);
greetUser("APDI", 20);
