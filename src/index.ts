window.Webflow ||= [];
window.Webflow.push(() => {
  const placeholders = document.querySelectorAll('[time-to-close]');
  const start = new Date();
  const day: number = start.getDay();

  function tick() {
    const now = new Date();
    let diff = 0;
    let factor = 0;
    let string = ``;

    function hhmm(n: number) {
      return [
        Math.floor((n / 1000 / 60 / 60) % 60),
        Math.floor((n / 1000 / 60) % 60),
        Math.round((n / 1000) % 60),
      ];
    }

    function str(num: number) {
      const closingTime = start.setHours(num, 0, 0);
      diff = closingTime - now;
      factor = (diff / 1000 / 60 / 60) % 60;
      if (factor <= 1) {
        string = `${hhmm(diff)[1]} minuter`;
      } else if (factor > 1 && factor < 2) {
        string = `${hhmm(diff)[0]} time ${hhmm(diff)[1]} minuter`;
      } else {
        string = `${hhmm(diff)[0]} timer ${hhmm(diff)[1]} minuter`;
      }
    }

    if (!placeholders) {
      return;
    }

    if (day === 6 || day === 7) {
      str(18);
    } else {
      str(19);
    }

    if (factor > 0 && factor < 5) {
      document.querySelector('.time-to-close-wrapper')?.classList.remove('hidden');
      placeholders.forEach((item) => {
        item.innerHTML = `Plantesalget er åpent. ${string} til stengetid.`;
      });
    }

    setTimeout(tick, 1000);
  }
  tick();
});
