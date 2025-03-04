// app.js

import { data } from './data.js';

let app = document.getElementById('app');

for (let song of data) {
  let p = document.createElement('p');
  p.innerText = song;
  app.appendChild(p);
}
