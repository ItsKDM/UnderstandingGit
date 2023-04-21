console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tickets");
  }, 2000);
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
  console.log("husband: We should go in");
  console.log("wife: no I am hungry");
  return new Promise((resolve, reject) => {
    resolve("popcorn");
  });
});

const getButter = getPopcorn.then((msg) => {
  console.log(`husband: here is the ${msg}, lets go in`);
  console.log("wife: no want I some butter");
  return new Promise((resolve, reject) => {
    resolve("butter");
  });
});

const getColdDrink = getButter.then((msg) => {
  console.log(`husband: here is your ${msg}!`);
  console.log("wife: I will bring some coke wait!");
  return new Promise((resolve, reject) => {
    resolve("coke");
  })
});

getColdDrink.then((msg) => {
  console.log(`wife: here's the ${msg}, lets go`);
  console.log("husband: shows the ticket");
})

console.log("person4: shows ticket");
console.log("person5: shows ticket");