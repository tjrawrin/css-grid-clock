(function() {
    const TIME_ZONE_LOCAL = 1;
    const TIME_ZONE_UTC = 2;

    let globalTZ = TIME_ZONE_LOCAL;
    const tzToggles = document.querySelectorAll('.tz-toggle');
    tzToggles.forEach(toggle => {
        toggle.addEventListener('change', event => {
            switch(event.target.value)
            {
                case 'utc': { globalTZ = TIME_ZONE_UTC; } break;
                case 'local': { globalTZ = TIME_ZONE_LOCAL; } break;
            }
            update_timer(new Date());
        });
    });

    function get_hours(time) {
        let res = time.getHours();
        if(globalTZ == TIME_ZONE_UTC) {
            res = time.getUTCHours();
        }
        return(res);
    }

    function get_minutes(time) {
        let res = time.getMinutes();
        if(globalTZ == TIME_ZONE_UTC) {
            res = time.getUTCMinutes();
        }
        return(res);
    }

    function get_seconds(time) {
        let res = time.getSeconds();
        if(globalTZ == TIME_ZONE_UTC) {
            res = time.getUTCSeconds();
        }
        return(res);
    }

    function update_timer(now) {
        const numbersEl = document.querySelectorAll('.number');
        const numbersHoursEl = Array.from(numbersEl).slice(0, 2);
        const numbersMinutesEl = Array.from(numbersEl).slice(2, 4);
        const numbersSecondsEl = Array.from(numbersEl).slice(4, 6);

        // Seconds ...
        if(numbersSecondsEl) {
            const seconds = get_seconds(now);
            const secondsNumbers = seconds.toString().split('');
            if (secondsNumbers.length === 1) secondsNumbers.unshift('0');
            for (let i = 0; i < numbersSecondsEl.length; i++) {
                numbersSecondsEl[i].removeAttribute('class');
                numbersSecondsEl[i].classList.add('number');
                numbersSecondsEl[i].classList.add(`n${secondsNumbers[i]}`);
            }
        }

        // Minutes ...
        if(numbersMinutesEl) {
            const minutes = get_minutes(now);
            const minutesNumbers = minutes.toString().split('');
            if (minutesNumbers.length === 1) minutesNumbers.unshift('0');
            for (let j = 0; j < numbersMinutesEl.length; j++) {
                numbersMinutesEl[j].removeAttribute('class');
                numbersMinutesEl[j].classList.add('number');
                numbersMinutesEl[j].classList.add(`n${minutesNumbers[j]}`);
            }
        }

        // Hours ...
        if(numbersHoursEl) {
            const hours = get_hours(now);
            const hoursNumbers = hours.toString().split('');
            if (hoursNumbers.length === 1) hoursNumbers.unshift('0');
            for (let k = 0; k < numbersHoursEl.length; k++) {
                numbersHoursEl[k].removeAttribute('class');
                numbersHoursEl[k].classList.add('number');
                numbersHoursEl[k].classList.add(`n${hoursNumbers[k]}`);
            }
        }
    }

  function setDate() {
    const now = new Date();
    update_timer(now);
  }

  setInterval(setDate, 1000);
})();
