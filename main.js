let params = {
  lines: [
    {
      background: '#00F',
      updateTime: 3000,
      elements: [
        {
          background: 'tomato',
          width: 25
        }, {
          background: 'red',
          width: 50
        }, {
          background: 'orange',
          width: 5
        },
      ]
    }, {
      background: 'green',
      updateTime: 1000,
      elements: [
        {
          background: 'pink',
          width: 30
        }, {
          background: 'yellow',
          width: 20
        },
      ]
    },
    {
      background: '#f8f8f8',
      updateTime: 2000,
      elements: [
        {
          background: '#dadada',
          width: 80
        }, {
          background: '#ccc',
          width: 10
        }
      ]
    }
  ]
}

let wrap = document.getElementById('wrap');
n = () => Math.floor(Math.random() * 256);

params.lines.forEach(line => {
  let filled = `<div class="line" style="background:${line.background}" data-t="${line.updateTime}">
    ${line.elements.map(block => `<div style="width:${block.width}%;background:${block.background}"></div>`).join('')}
  </div>`;
  wrap.innerHTML += filled;
})

let lines = document.querySelectorAll('.line');

lines.forEach(line => {
  setInterval(() => {
    line.style.background = `rgb(${n()},${n()},${n()})`; // for line itself
    for (let i = 0 ; i < line.children.length; i++) line.children[i].style.background = `rgb(${n()},${n()},${n()})`; // for inner blocks of 'line'
  }, line.dataset.t)
})
