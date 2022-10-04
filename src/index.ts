window.Webflow ||= [];
window.Webflow.push(() => {
  const placeholder = document.querySelector('[time-to-close]');
  const closing1 = 19;
  const closing2 = 18;

  const day: number = new Date().getDay();
  const time: number = new Date().getHours();

  function refresh() {
    let toclose = 0;
    if (day === 6 || day === 7) {
      toclose = closing2 - time;
    }
    toclose = closing1 - time;

    if (!placeholder) {
      return;
    }
    if (toclose < 6) {
      placeholder.innerHTML = `There is ${toclose} hours left to close!`;
    } else {
      placeholder.innerHTML = ``;
    }
  }

  document.addEventListener('DOMContentLoaded', refresh);
  setInterval(refresh, 1);
});
