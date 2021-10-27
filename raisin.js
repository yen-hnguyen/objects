//function raisinAlarm receives an array, check if persky raisin in the array
// if yes, return "Raisin alert!", if no, return "All good!"

// Function
const raisinAlarm = function (cookie) {
  for (const item of cookie) {
    if (item === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

// Test Code
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Function
const raisinAlarmArray = function (cookies) {
  let result = [];
  for (const cookie of cookies) {
    if (cookie.includes("🍇")) {
      result.push("Raisin alert!");
    } else {
      result.push("All good!");
    }
  }
  return result;
};

//Test Code
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
