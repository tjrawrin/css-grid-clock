(function() {
  const numbersEl = document.querySelectorAll('.number');
  const numbersHoursEl = Array.from(numbersEl).slice(0, 2);
  const numbersMinutesEl = Array.from(numbersEl).slice(2, 4);
  const numbersSecondsEl = Array.from(numbersEl).slice(4, 6);

  function setDate() {
    const now = new Date();

    // Seconds ...
    const seconds = now.getSeconds();
    const secondsNumbers = seconds.toString().split('');
    if (secondsNumbers.length === 1) secondsNumbers.unshift('0');
    for (let i = 0; i < numbersHoursEl.length; i++) {
      numbersSecondsEl[i].removeAttribute('class');
      numbersSecondsEl[i].classList.add('number');
      numbersSecondsEl[i].classList.add(`n${secondsNumbers[i]}`);
    }

    // Minutes ...
    const minutes = now.getMinutes();
    const minutesNumbers = minutes.toString().split('');
    if (minutesNumbers.length === 1) minutesNumbers.unshift('0');
    for (let j = 0; j < numbersHoursEl.length; j++) {
      numbersMinutesEl[j].removeAttribute('class');
      numbersMinutesEl[j].classList.add('number');
      numbersMinutesEl[j].classList.add(`n${minutesNumbers[j]}`);
    }

    // Hours ...
    const hours = now.getHours();
    const hoursNumbers = hours.toString().split('');
    if (hoursNumbers.length === 1) hoursNumbers.unshift('0');
    for (let k = 0; k < numbersHoursEl.length; k++) {
      numbersHoursEl[k].removeAttribute('class');
      numbersHoursEl[k].classList.add('number');
      numbersHoursEl[k].classList.add(`n${hoursNumbers[k]}`);
    }
  }

  setInterval(setDate, 1000);
})();
