let baseURL = "http://numbersapi.com";


let favNumber = 501;
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

let favNumbers = [4, 5, 25];
Promise.all(
  favNumbers.map(num => {
    return $.getJSON(`${baseURL}/${num}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
