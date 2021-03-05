(function () {
  const birthday = new Date(2021, 1, 22);
  const today = new Date();

  const days =
    Math.floor((today.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24)) +
    1;
  const weeks = Math.ceil(days / 7);

  document.getElementById("bobo").innerHTML = `${days} days (${weeks} weeks)`;
})();
