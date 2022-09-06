window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "green";
  }
});

test = window.history;
console.log(test);
