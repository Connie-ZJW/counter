var counter = document.getElementById("counter");

var count = 1;

setInterval(function () {
  counter.innerHTML = count
  count = count + 1
}, 1000);
