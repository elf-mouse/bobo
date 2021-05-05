(function () {
  const birthday = new Date(2021, 1, 22);
  const today = new Date();

  const days = Math.floor(
    (today.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24)
  );
  const weeks = Math.floor(days / 7);
  const weekDays = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const months = Math.floor(days / 3) / 10;

  const theDays = days + 1;
  const theWeeks = weekDays ? `${weeks}+${weekDays}` : weeks;

  document.getElementById(
    "timeline"
  ).innerHTML = `THE ${theDays} DAYS (${days} days | ${theWeeks} weeks | ${months} months)`;
})();
