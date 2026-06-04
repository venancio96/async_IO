let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 6000);
});

// Define Promise 2 as a function
function myPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 3000);
  });
}

// Call sequentially
myPromise1.then((successMessage) => {
  console.log("From Callback " + successMessage);
  return myPromise2(); // starts AFTER Promise 1 resolves
}).then((successMessage) => {
  console.log("From Callback " + successMessage);
});
