(function () {
  const birthday = new Date(2021, 1, 22);
  const today = new Date();

  const date =
    Math.floor((today.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24)) +
    1;

  document.getElementById("bobo").innerHTML = date;
})();
