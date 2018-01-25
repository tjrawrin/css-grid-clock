(function() {
  const template = `
  <div class="number">
    <div class="line la"></div>
    <div class="line lb"></div>
    <div class="line lc"></div>
    <div class="line ld"></div>
    <div class="line le"></div>
    <div class="line lf"></div>
    <div class="line lg"></div>
    <div class="line lh"></div>
    <div class="line li"></div>
  </div>`;
  const container = document.querySelector('.container');
  const date = new Date();

  for (let i = 0; i < date.getTime().toString().length; i++) {
    container.appendChild(htmlToElement(template));
  }

  // random number generator
  function getRandomNumber(limit) {
    return Math.floor(Math.random() * Math.floor(limit));
  }

  // html to element
  function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  const els = document.querySelectorAll('.number');

  setInterval(function() {
    let d = new Date();
    let dStr = d.getTime().toString();
    for (let j = 0; j < els.length; j++) {
      els[j].removeAttribute('class');
      els[j].classList.add('number');
      els[j].classList.add(`n${dStr.slice(j, j + 1)}`);
    }
  }, 1);
})();
