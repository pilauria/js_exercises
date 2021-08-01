let counter = 0;

function incrementCounter() {
  counter += 1;
  renderState();
}

function renderState() {
  console.log(counter);
}

setInterval(() => {
  incrementCounter();
}, 1000);
