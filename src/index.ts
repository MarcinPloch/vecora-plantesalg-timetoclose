window.Webflow ||= [];
window.Webflow.push(() => {
  const placeholder = document.querySelector('[time-to-close]');
  const start = new Date();
  const day: number = start.getDay();

  function tick() {
    const now = new Date();
    let diff = 0;
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
      if ((diff / 1000 / 60 / 60) % 60 < 1) {
        string = `${hhmm(diff)[1]} minuter`;
      } else if ((diff / 1000 / 60 / 60) % 60 < 2) {
        string = `${hhmm(diff)[0]} time ${hhmm(diff)[1]} minuter`;
      } else {
        string = `${hhmm(diff)[0]} timer ${hhmm(diff)[1]} minuter`;
      }
    }

    if (day === 6 || day === 7) {
      str(18);
    } else {
      str(19);
    }

    if (!placeholder) {
      return;
    }
    placeholder.classList.remove('hidden');
    placeholder.innerHTML = `Plantesalget er åpent. ${string} til stengetid.`;
    // if ((diff / 1000 / 60 / 60) % 60 < 2) {
    //   placeholder.classList.remove('hidden');
    //   placeholder.innerHTML = `${string} to close!`;
    // }

    setTimeout(tick, 1000);
  }
  tick();
});
